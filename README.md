# Grocery Booking API

## Overview

This project implements a Grocery Booking API using Node.js and TypeScript. The API allows for the management and booking of grocery items. There are two roles: Admin and User. Admins can manage grocery items, including adding, updating, and removing items, as well as managing inventory levels. Users can view and book grocery items.

### Admin Responsibilities

1. Add new grocery items to the system.
2. View existing grocery items.
3. Remove grocery items from the system.
4. Update details (e.g., name, price, inventory) of existing grocery items.
5. Manage inventory levels of grocery items.

### User Responsibilities

1. View the list of available grocery items.
2. Book multiple grocery items in a single order.

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SarveshK16/qp-assessment.git
cd qp-assessment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```
DB_USER=your_db_user
DB_HOST=your_db_host
DB_DATABASE=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

### 4. Initialize Database

Ensure your PostgreSQL server is running and the database specified in the `.env` file exists.

### 5. Start the Server

```bash
tsc -b
npm app.js
```

The server should now be running on `http://localhost:3000`.

## API Endpoints

### Admin Responsibilities

1. **Add New Grocery Item**
    - **Endpoint**: `POST /admin/items`
    - **Body**:
    ```json
    {
        "name": "Item Name",
        "price": 10.99,
        "inventory": 100
    }
    ```

2. **View Existing Grocery Items**
    - **Endpoint**: `GET /admin/items`

3. **Remove Grocery Item**
    - **Endpoint**: `DELETE /admin/items/:id`
    - **Body**:
    ```json
    {
        "id": 1
    }
    ```

4. **Update Grocery Item Details**
    - **Endpoint**: `PUT /admin/items/:id`
    - **Body**:
    ```json
    {
        "name": "Item Name",
        "price": 10.99,
        "inventory": 100
    }
    ```

5. **Update Inventory Levels**
    - **Endpoint**: `PATCH /admin/items/:id/inventory`
    - **Body**:
    ```json
    {   
        "id": 1,
        "inventory": 50
    }
    ```

### User Responsibilities

1. **View Available Grocery Items**
    - **Endpoint**: `GET /user/items`

2. **Book Multiple Grocery Items**
    - **Endpoint**: `POST /user/orders`
    - **Body**:
    ```json
    {
        "items": [
            {
                "itemId": 1,
                "quantity": 2
            },
            {
                "itemId": 2,
                "quantity": 1
            }
        ],
        "totalPrice": 34.97
    }
    ```

## Conclusion

This README provides an overview of the Grocery Booking API, setup instructions, and examples of how to use the API endpoints. Follow these instructions to get the API up and running on your local machine. If you encounter any issues, refer to the project's source code for further details.