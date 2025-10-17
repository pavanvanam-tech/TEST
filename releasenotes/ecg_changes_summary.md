
# Feature: Define and Implement Core User Schema

This release introduces a foundational user management system by defining a core user schema and integrating it with the Express application via Mongoose and MongoDB.

## Changes:

1.  **Project Setup (`package.json`)**: 
    - A `package.json` file was created to manage all project dependencies.
    - Added `express`, `mongoose`, `bcryptjs`, and `dotenv`.

2.  **Database Configuration (`config/db.js`)**:
    - A new configuration file was added to handle the MongoDB connection logic, promoting modularity and security through environment variables.

3.  **User Model (`models/User.js`)**:
    - A new `User` schema was defined using Mongoose.
    - The schema includes fields: `email`, `password`, `username`, `firstName`, `lastName`.
    - Implemented robust validation and a pre-save hook for hashing passwords with `bcryptjs`.

4.  **Application Integration (`TEST/main.js`)**:
    - The main Express application file was updated to connect to MongoDB on startup.
    - Added `express.json()` middleware to parse incoming JSON request bodies.

5.  **Documentation (`TEST/README.md`)**:
    - The project's `README.md` was updated with new setup instructions, dependency information, and details about the user schema.
