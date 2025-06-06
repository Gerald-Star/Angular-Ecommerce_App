
/* 
*1. Use environment.ts for Dev and environment.prod.ts for Prod
=====================================================================================
* Setting up the development environment configuration for an e-commerce application
* my-ecommerce/src/environments/environment.development.ts
=====================================================================================
This file contains the API URL for development purposes.
It is used to connect the frontend application to the backend API during development.
The API URL can be changed based on the environment (development, production, etc.).
This file is part of the Angular environment configuration.

*/
export const environment = {
  apiUrl: 'http://localhost:3001', // Development API URL
};
