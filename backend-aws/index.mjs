
/**

This Lambda function serves as an API endpoint to store customer data fetched from the frontend.
It interacts with DynamoDB to store the received data securely. The DynamoDB table "CustomerDetails"
is utilized for this purpose. Upon receiving a request, it parses the incoming JSON payload and
constructs the necessary parameters to store the data into the DynamoDB table.
The function utilizes AWS SDK's DynamoDBDocumentClient to simplify interactions with DynamoDB.
@param {Object} event - The event object representing the HTTP request.
@returns {Object} - Returns an HTTP response object indicating the success or failure of the operation.

**/

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDBClient = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(dynamoDBClient);

export const handler = async (event) => {
    let response = { statusCode: 200, body: '' };
    try {
        const requestBody = JSON.parse(event.body);
        const params = {
            TableName: 'CustomerDetails',
            Item: {
                email: requestBody.email,
                firstName: requestBody.firstName,
                lastName: requestBody.lastName,
                phoneNumber: requestBody.phoneNumber,
                postcode: requestBody.postcode,
            }
        };

        await docClient.send(new PutCommand(params));
        response.body = JSON.stringify({ message: 'Customer details submitted successfully!' });
    } catch (error) {
        console.error(error);
        response.statusCode = 500;
        response.body = JSON.stringify({ message: 'Failed to submit customer details' });
    }
    return response;
};
