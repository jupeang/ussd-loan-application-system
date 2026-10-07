# USSD Loan Application System

A USSD-based loan application system that allows users to access loan services and submit loan applications using a mobile phone.

## Project Description

The system provides a simple USSD menu for users to access loan services, provide their application details, and receive responses through their mobile phones.

The USSD server is built with Node.js and Express.js. It communicates with a Python Flask API for loan processing and uses MongoDB to store application information.

## Features

- USSD-based loan application
- Applicant information collection
- Loan amount submission
- Salary and applicant details
- Loan repayment duration
- Dependents information
- Existing loan information
- Loan processing through a Flask API
- MongoDB database storage
- Node.js and Express.js USSD server

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Python
- Flask
- MongoDB
- Axios
- USSD

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
```

## USSD Menu

```text
Welcome to SmartLend

1. My Account
2. Apply for Loan
3. Exit
```

When the user selects **Apply for Loan**, the system collects the required information and sends it to the backend for processing.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/jupeang/ussd-loan-application-system.git
```

### 2. Open the project folder

```bash
cd ussd-loan-application-system
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The Node.js server runs locally on:

```text
http://localhost:3000
```

## Project Purpose

This project demonstrates how USSD, backend APIs, databases, and loan processing can be combined to provide loan services through mobile phones.

## Author

**Justus Peter**

Bachelor of Computer Science  
South Eastern Kenya University

GitHub: https://github.com/jupeang

Email: justusmalombep@gmail.com
