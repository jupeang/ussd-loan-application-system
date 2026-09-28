````markdown
# USSD Loan Application System

A USSD-based loan application system that allows users to apply for loans using a mobile phone without requiring a smartphone or internet connection.

## Project Description

The system provides a simple USSD menu through which users can access loan services, submit loan applications, and receive responses using a mobile phone.

The application communicates with a Python Flask backend for loan processing and uses MongoDB for storing application information.

## Main Features

- USSD-based loan application
- Loan application processing
- Applicant information collection
- Loan amount submission
- Salary and applicant details
- Loan repayment duration
- Dependents information
- Existing loan information
- MongoDB database storage
- Flask API for loan processing
- Node.js and Express.js USSD server

## Technologies Used

- Node.js
- Express.js
- Python
- Flask
- MongoDB
- JavaScript
- USSD
- Axios

## System Flow

```text
Mobile Phone
     ↓
USSD Application
     ↓
Node.js / Express.js
     ↓
Flask API
     ↓
Loan Processing
     ↓
MongoDB
     ↓
Response to User
````

## USSD Menu

```text
Welcome to SmartLend

1. My Account
2. Apply for Loan
3. Exit
```

When the user selects **Apply for Loan**, the system collects the required information and sends it for processing.

## Installation

Clone the repository:

```bash
git clone https://github.com/jupeang/ussd-loan-application-system.git
```

Enter the project folder:

```bash
cd ussd-loan-application-system
```

Install the Node.js dependencies:

```bash
npm install
```

Start the Node.js server:

```bash
node server.js
```

The USSD server runs locally on:

```text
http://localhost:3000
```

## Project Purpose

This project demonstrates how USSD technology, backend APIs, databases, and loan processing can be combined to provide financial services through basic mobile phones.

## Author

**Justus Peter**

Bachelor of Computer Science
South Eastern Kenya University

GitHub: https://github.com/jupeang

Email: [justusmalombep@gmail.com](mailto:justusmalombep@gmail.com)

````

### Save it

On GitHub:

1. Create `README.md`
2. Paste the content above.
3. Scroll down.
4. Commit message:

```text
Add USSD project README
````

5. Click **Commit changes**.

After that, we'll connect the **USSD View Project** button on your portfolio to this repository.
