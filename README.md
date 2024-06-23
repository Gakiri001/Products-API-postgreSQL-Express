<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Products API](#products-api)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)
  - [Database Setup](#database-setup)
  - [Environment Variables](#environment-variables)
  - [Implementing the Endpoints](#implementing-the-endpoints)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Products API
This is a RESTful API developed using Express.js and PostgreSQL to manage a collection of products. The API allows clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database.

## Prerequisites
- Node.js and npm installed on your machine.  
- PostgreSQL installed and running on your machine.

## Project Setup
1. Initialize a new Node.js project:  
   ```bash
   npm init -y
   ```
1. Install the necessary dependencies:
    ```bash
    npm install express pg dotenv
    ```
1. Install nodemon for automatic server restarts during development:
    ```bash
    npm install nodemon
    ```
1. Set up PostgreSQL:  
- Ensure PostgreSQL is installed and running on your machine.  
- Create a new database for this project.  
- Use the provided SQL to create the products table and insert the initial data.  

## Database Setup
Connect to your PostgreSQL database and create the products table with the following SQL:  
```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    productThumbnail VARCHAR(255) NOT NULL,
    productTitle VARCHAR(255) NOT NULL,
    productDescription TEXT,
    productCost DECIMAL(10, 2),
    onOffer BOOLEAN
);

INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer)
VALUES
('http://example.com/thumbnail1.jpg', 'Product 1', 'Description for product 1', 10.00, true),
('http://example.com/thumbnail2.jpg', 'Product 2', 'Description for product 2', 20.00, false),
('http://example.com/thumbnail3.jpg', 'Product 3', 'Description for product 3', 30.00, true);
```

## Environment Variables
Create a .env file in the root of your project with the following content:  

```markfile
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=your_database_name
DB_PORT=5432
```
Replace your_postgres_username, your_postgres_password, and your_database_name with your actual PostgreSQL credentials and database name.

## Implementing the Endpoints
Create a file named index.js and add the following code to set up the server and implement the endpoints:
```javascript
import express from "express";
import productsrouter from "./route/products.route.js";

const app = express();
app.use(express.json());
app.use("/products", productsrouter);


app.listen(3000, () => {
  console.log("server on port 3000");
});
```

- create a folder 'route' with 'products.route.js' file  
- create controllers file that contains all the functions for the HTTP status
- create a middle file for validation  in 'post' http status

## Running the Server
Start the server using the following command:

```bash
npm run dev:watch
```
## API Endpoints
- Get All Products: GET /products  
- Get a Single Product: GET /products/:id  
- Create a Product: POST /products  
- Update a Product: PUT /products/:id  
- Delete a Product: DELETE /products/:id  