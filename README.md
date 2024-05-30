<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
 
# NestJS E-commerce API

This project is an e-commerce API built with NestJS and Prisma, utilizing a PostgreSQL database. It provides functionalities for managing products, users, and orders.

## Features

- **User Management**: Register and manage users with roles.
- **Product Management**: CRUD operations for products.
- **Order Management**: Create and manage orders for products.

## Prerequisites

- Node.js
- PostgreSQL
- Prisma

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ismail-Mouyahada/Master-nestjs-restful-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Master-nestjs-restful-api
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

4. Set up the PostgreSQL database and add the database URL to a `.env` file:

   ```env
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   ```

5. Generate the Prisma client:

   ```bash
   npx prisma generate
   ```

6. Run the Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

## Running the Application

1. Start the NestJS application:

   ```bash
   npm run start:dev
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

### User Management

- **Register User**

  - **Endpoint**: `POST /users/register`
  - **Request Body**:
    ```json
    {
      "nom": "John",
      "prenom": "Doe",
      "email": "john.doe@example.com",
      "motDePasse": "password"
    }
    ```

- **Get All Users**

  - **Endpoint**: `GET /users`

- **Get User by ID**

  - **Endpoint**: `GET /users/:id`

- **Update User**

  - **Endpoint**: `PUT /users/:id`
  - **Request Body**:
    ```json
    {
      "nom": "John",
      "prenom": "Doe",
      "email": "john.doe@example.com",
      "motDePasse": "newpassword",
      "role": "admin"
    }
    ```

- **Delete User**

  - **Endpoint**: `DELETE /users/:id`

### Product Management

- **Add Product**

  - **Endpoint**: `POST /products`
  - **Request Body**:
    ```json
    {
      "nom": "Product Name",
      "description": "Product Description",
      "prix": 19.99,
      "image": "http://example.com/image.png"
    }
    ```

- **Get All Products**

  - **Endpoint**: `GET /products`

- **Get Product by ID**

  - **Endpoint**: `GET /products/:id`

- **Update Product**

  - **Endpoint**: `PUT /products/:id`
  - **Request Body**:
    ```json
    {
      "nom": "Updated Product Name",
      "description": "Updated Product Description",
      "prix": 24.99,
      "image": "http://example.com/newimage.png"
    }
    ```

- **Delete Product**

  - **Endpoint**: `DELETE /products/:id`

### Order Management

- **Create Order**

  - **Endpoint**: `POST /orders`
  - **Request Body**:
    ```json
    {
      "utilisateurId": 1,
      "produits": [
        {
          "produitId": 1,
          "quantite": 2
        },
        {
          "produitId": 2,
          "quantite": 1
        }
      ]
    }
    ```

- **Get All Orders**

  - **Endpoint**: `GET /orders`

- **Get Order by ID**

  - **Endpoint**: `GET /orders/:id`

- **Update Order**

  - **Endpoint**: `PUT /orders/:id`
  - **Request Body**:
    ```json
    {
      "utilisateurId": 1,
      "produits": [
        {
          "produitId": 1,
          "quantite": 3
        }
      ]
    }
    ```

- **Delete Order**

  - **Endpoint**: `DELETE /orders/:id`

## Prisma Schema

This is the Prisma schema file used to define the database structure.
 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any inquiries or feedback, please contact Ismail Mouyahada at [your-email@example.com](mailto:your-email@example.com).

---

Happy coding! 😊
