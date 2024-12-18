Tour Booking Application
_____________________________
This is a React-based tour booking application that allows users to book tours, view their booking details, and generate an invoice upon successful booking.

Project Description
The Tour Booking Application provides users with an intuitive interface to book tours with the following features:

Fill in booking details (tour name, full name, phone number, guest count, and date).
Dynamic calculation of total booking cost, including a service fee.
Real-time validation for user inputs such as name, phone number, and guest count.
Invoice generation upon successful booking.
Navigation to a confirmation page with the invoice summary and options to return to the homepage.


____________________
Setup Instructions
___________________
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

bash
Copy code
npm start
The app will run at http://localhost:3000/.
__________________________
Backend API 
_________________________
The project uses a backend API to store booking details. If you have a backend setup (e.g., Express.js), ensure it runs at:

bash
Copy code
http://localhost:4000
The API endpoint:
 1. GET /packages: Retrieve all tour packages.
 2. GET /packages/:id: Retrieve details of a specific package.
 3. POST /bookings: Submit a package booking.
 4. Admin:
 - POST /admin/packages: Add a new package.
 - PUT /admin/packages/:id: Update an existing package.
 - DELETE /admin/packages/:id: Delete a package.
- Save tour packages and bookings requests in separate MongoDB collections



___________________________
List of Implemented Features
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
