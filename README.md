# Customer Data Management System

This project consists of both backend and frontend components for managing customer data.

## Backend

### Overview
The backend is implemented using AWS Lambda functions and DynamoDB. It provides an API endpoint to store customer data securely.

### Functionality
- Parses incoming JSON payload.
- Constructs parameters to store data into DynamoDB.
- Utilizes DynamoDBDocumentClient for interaction with DynamoDB.
- Handles success and failure scenarios with appropriate HTTP responses.

### Technologies Used
- Node.js
- AWS Lambda
- AWS SDK
- DynamoDB

### Usage
1. Integrated with frontend application with the API endpoint exposed by the Lambda function.


## Frontend

### Overview
The frontend provides a form for users to submit their customer details. It sends the data to the backend API endpoint for storage in DynamoDB. The application utilizes React for the user interface and Axios for making HTTP requests.

### Functionality
- Collects customer details including first name, last name, email, phone number, and postcode.
- Validates input fields.
- Submits data to the backend API endpoint.
- Displays success or error messages using toast notifications.

### Technologies Used
- React
- Axios
- React Hook Form
- React Toastify

### Installation and Usage
1. Ensure the backend API endpoint is properly configured and accessible.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application via the provided URL.

### Code Structure
- `src/api/api.js`: Contains functions to interact with the backend API.
- `src/components/CustomerForm.js`: Defines the customer details form component.
- `src/css/CustomerFormStyles.css`: Contains styles for the form.
- `src/App.js`: Entry point of the application.
- `src/index.js`: Renders the root component of the application.

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

