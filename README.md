# gh-actions-demo
Simple nodejs backend Github action build and run tests (CI)

![main workflow](https://github.com/gmaheshraju/gh-actions-demo-main/actions/workflows/node.js.yml/badge.svg)

# Phase 2

Include CD part to deploy to any cloud server or open source server

# Phase 3

Dockerize the Appplication.

# Phase 4

Orchsetrate containers through Kubernetes

# Set up the logging and dashboards

Using cloudnative stack implement centralized logging solution

# Note

Check the postman collection for quick Api endpoint testing.
Check the App.js Admin user is hardcoded to "Mahesh" only admin user can create data with few endpoints.
Post is Hard coded to 8090. Check the index.js

# API Endpoints

## Sign Up

Endpoint: POST /signup
Description: Allows a user to sign up by providing an email and password.

## Login

Endpoint: POST /login
Description: Allows a user to log in by providing their email and password.

## Submissions

Endpoint: GET /submissions

Description: Retrieves the user's submissions for a specific problem.

Endpoint: POST /submissions

Description: Allows a user to submit a problem solution, with the solution being randomly accepted or rejected.

## Questions

Endpoint: GET /questions

Description: Retrieves a list of questions.

## Endpoint: POST /questions

Description: Allows an admin to add a new question.

Getting Started
Clone the repository.
Install the dependencies using npm install.
Start the server using npm start.
The API will be available at http://localhost:8090.

Import the postman collection.

go through the index.js code

start testing, debugging your first api.
