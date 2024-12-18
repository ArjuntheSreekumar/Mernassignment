# Tour Booking Application

This is a React-based tour booking application that allows users to book tours, view their booking details, and generate an invoice upon successful booking.

Project Description
The Tour Booking Application provides users with an intuitive interface to book tours with the following features:

Fill in booking details (tour name, full name, phone number, guest count, and date).

Dynamic calculation of total booking cost, including a service fee.

Real-time validation for user inputs such as name, phone number, and guest count.

Invoice generation upon successful booking.

Navigation to a confirmation page with the invoice summary and options to return to the homepage.



# Setup Instructions

To set up and run the project locally, follow these steps:

1. Clone the Repository
    bash
    Copy code
     git clone https://github.com/your-username/tour-booking-app.git
     cd tour-booking-app

3. Install Dependencies
   Make sure you have Node.js and npm installed on your system. Install project dependencies by running:
   bash
   Copy code
   npm install
   
4. Run the Server
   Start the application using:

# Project Structure
The project is divided into two main folders: frontend and backend.

## Frontend
The frontend is built with React.js. Follow these instructions to set it up:

1. Navigate to the frontend directory:
  command to write in terminal -> cd frontend

2. Install dependencies:
  npm install

3. Start the development server:
   npm start

The frontend will be available at http://localhost:3000.

4. Usage:

Home Page: Displays the main interface.
Tours Page: Accessible via the header menu, lists all available tours.
Tour Details: Click on a tour title to view details. Here you can book the tour, and the total amount will be calculated dynamically based on the number of guests and the tour price.
Login Page
Register Page
Header section / footer section
Newsletter section

## Backend
The backend is built with Node.js and Express.js, and it connects to MongoDB. Follow these instructions to set it up:

1. Navigate to the backend directory:
   cd backend
   
2. Install dependencies:
   Install the necessary libraries:
     npm install express dotenv mongoose cors cookie-parser

3. Create a .env file in the backend directory with the necessary environment variables. Example .env content:
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   
4. Start the development server:
    npm run start-dev

5. Backend Setup:

  Express: Framework for building the server.
  dotenv: Loads environment variables from the .env file for sensitive information like database connection strings.
  mongoose: ODM library for MongoDB, used for database interactions.
  cors: Middleware for enabling Cross-Origin Resource Sharing, allowing your frontend to interact with the backend.
  cookie-parser: Middleware for parsing cookies, useful for managing sessions and other cookie-based data.


API Endpoints:

POST /tours: Create a new tour.
DELETE /tours/:id: Delete a tour by ID.
PUT /tours/:id: Update a tour by ID.
GET /tours: Get all tours.
GET /tours/:id: Get a single tour by ID.
__________________________
# Backend API 
_________________________
The project uses a backend API to store booking details. If you have a backend setup (e.g., Express.js), ensure it runs at:
http://localhost:4000
The API endpoint:
 1. GET /packages: Retrieve all tour packages.
 2. GET /packages/:id: Retrieve details of a specific package.
 3. POST /bookings: Submit a package booking.
 4. Admin:
 - POST /admin/packages: Add a new package.
 - PUT /admin/packages/:id: Update an existing package.
 - DELETE /admin/packages/:id: Delete a package.



___________________________
# List of Implemented Features
___________________________
Booking Page:

Users can enter the following booking details:
Tour Name
Full Name
Phone Number
Guest Size
Booking Date
Input validation:

Full name: Letters and spaces only.
Phone: 10 digits starting with 6-9.
Guest size: Minimum of 1 guest.
Dynamic Total Calculation:

Automatically calculates the total booking cost based on:
Price per guest
Service fee.

Invoice Generation:

After successfully submitting booking details, an invoice is displayed with:

Customer Details
Tour Details
Payment Summary (Subtotal, Service Fee, and Total Amount).

Thank You Page:

Displays a confirmation message with the full invoice summary.
Allows users to navigate back to the home page.

Error Handling:

Displays error messages for invalid inputs.
Shows general error messages if the server fails.
