# TEST

This project is a basic Express.js application that demonstrates a robust user schema implementation with MongoDB and Mongoose.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-root>
    ```

2.  **Install Dependencies:**
    Ensure you have Node.js and npm installed. Then, install the project dependencies from the root directory:
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory of the project and add your MongoDB connection URI:
    ```
    MONGO_URI=mongodb://localhost:27017/your_database_name
    PORT=3000
    ```
    Replace `mongodb://localhost:27017/your_database_name` with your actual MongoDB connection string.

4.  **Run the Application:**
    ```bash
    npm start
    ```
    The server will start on the port specified in your `.env` file (default: 3000).

## User Schema Details

The application implements a `User` schema with the following fields:
*   `email`: String, required, unique, validated for valid email format.
*   `password`: String, required, minimum 8 characters, securely hashed using bcrypt.
*   `username`: String, required, unique.
*   `firstName`: String, optional.
*   `lastName`: String, optional.
*   `createdAt`: Date, automatically set upon user creation.

Passwords are hashed using `bcryptjs` with 10 salt rounds before being saved to the database, ensuring secure storage.

## API Endpoints (Future)

*   `/api/users/register`: (To be implemented) For user registration.
*   `/api/users/login`: (To be implemented) For user login.