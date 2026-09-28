const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

// Store partial session data and completed loans
const sessions = {};
const loans = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/ussd', (req, res) => {
    const { text, phoneNumber } = req.body;
    const textArray = text.split('*').map(t => t.trim());
    let response = '';

    // --- MAIN MENU ---
    if (text === '') {
        response = `CON Welcome to my USSD App
1. My Account
2. Apply for Loan
3. Exit`;
    }

    // --- MY ACCOUNT ---
    else if (textArray[0] === '1') {
        if (textArray.length === 1) {
            response = `CON My Account Menu
1. Check Balance
2. Loan Status
3. Back`;
        } else if (textArray[1] === '1') {
            response = `END Your balance is KES 10,000`;
        } else if (textArray[1] === '2' && textArray.length === 2) {
            response = `CON Enter your Loan ID to check status:`;
        } else if (textArray[1] === '2' && textArray.length >= 3) {
            const loanID = textArray[2];
            const loan = loans[loanID];
            if (loan) {
                response = `END Loan ID: ${loanID}
Amount: KES ${loan.amount}
Income: KES ${loan.income}
Existing Loans: ${loan.existingLoans}
Status: ${loan.status}`;
            } else {
                response = `END Loan not found. Make sure you enter the correct ID.`;
            }
        } else if (textArray[1] === '3') {
            response = `CON Welcome to my USSD App
1. My Account
2. Apply for Loan
3. Exit`;
        } else {
            response = `END Invalid option`;
        }
    }

    // --- APPLY LOAN ---
    else if (textArray[0] === '2') {
        // Step 1: loan amount
        if (textArray.length === 1) {
            response = `CON Enter loan amount (KES):`;
        } 
        // Step 2: monthly income
        else if (textArray.length === 2) {
            sessions[phoneNumber] = { amount: parseInt(textArray[1]) };
            response = `CON Enter your monthly income (KES):`;
        } 
        // Step 3: existing loans
        else if (textArray.length === 3) {
            sessions[phoneNumber].income = parseInt(textArray[2]);
            response = `CON How many existing loans do you have? (0 if none)`;
        } 
        // Step 4: call Python to approve/reject
        else if (textArray.length === 4) {
            const existingLoans = parseInt(textArray[3]);
            const session = sessions[phoneNumber];
            session.existingLoans = existingLoans;

            // Generate Loan ID
            const loanID = 'LN' + Math.floor(Math.random() * 1000000);

            const python = spawn('python', [
                'application.py',
                session.amount,
                session.income,
                existingLoans
            ]);

            python.stdout.on('data', (data) => {
                const status = data.toString().trim();

                // Save loan in memory
                loans[loanID] = {
                    phoneNumber,
                    amount: session.amount,
                    income: session.income,
                    existingLoans: session.existingLoans,
                    status
                };

                response = `END ${status}
Amount: KES ${session.amount}
Loan ID: ${loanID}`;

                res.set('Content-Type', 'text/plain');
                res.send(response);
            });

            python.stderr.on('data', (err) => {
                console.error(err.toString());
                response = `END Error processing loan`;
                res.set('Content-Type', 'text/plain');
                res.send(response);
            });

            return; // wait for Python output
        }
    }

    // --- EXIT ---
    else if (textArray[0] === '3') {
        response = `END Thank you for using our service.`;
    } 
    else {
        response = `END Invalid option.`;
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
});

app.listen(PORT, () => {
    console.log(`USSD app running on port ${PORT}`);
});