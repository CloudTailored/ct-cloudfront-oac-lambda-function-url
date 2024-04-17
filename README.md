Secure AWS Lambda Function with CloudFront OAC
==============================================

This repository demonstrates how to secure an AWS Lambda function URL using Amazon CloudFront's Origin Access Control (OAC). The setup ensures that the Lambda function can only be accessed through the designated CloudFront distribution, utilizing AWS Signature Version 4 for secure authentication.

Prerequisites
-------------

- AWS Account: Make sure you have an active AWS account.
- AWS CLI: Ensure AWS CLI is installed and configured with the necessary permissions.
- Node.js: Ensure Node.js is installed on your machine.
- Serverless Framework: The Serverless Framework should be installed globally or be available in your project.

Quick Start
-----------

Follow these steps to deploy the example:

### Step 1: Installation

Clone this repository and navigate into the project directory:

```bash
git clone git@github.com:CloudTailored/ct-cloudfront-oac-lambda-function-url.git
cd ct-cloudfront-oac-lambda-function-url/
```

Install the necessary npm packages:

`npm install`

### Step 2: Deploy

Deploy the project using the Serverless Framework:

`npx sls deploy`

This command will deploy your CloudFront and Lambda configuration to AWS.

Verification
------------

To verify the setup, try accessing the Lambda function URL directly and through the CloudFront URL:

- Direct Lambda Function URL (should return a 403 Forbidden error):\
    <https://7kdujf7ulwjozgtwajq6ff4mle0wunie.lambda-url.eu-west-1.on.aws/>

- Via CloudFront URL (should successfully access the Lambda function):\
    <https://d2p0zz5u11xzg8.cloudfront.net/>
