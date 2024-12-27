import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // CSRF protection
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

const app = express();
const port = 8000; // Use the desired port directly

// MongoDB Connection URI// Updated MongoDB Connection URI
const MONGO_URI = 'mongodb+srv://newaccount101:arjun_2004@cluster0.cf5gq.mongodb.net/tour-booking?retryWrites=true&w=majority';


// Database connection
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected..');
  } catch (err) {
    console.log('MongoDB database connection failed:', err.message);
  }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/auth', authRoute);
app.use('/tours', tourRoute);
app.use('/users', userRoute);
app.use('/review', reviewRoute);
app.use('/booking', bookingRoute);

// Start the server
app.listen(port, () => {
  connect();
  console.log('Server listening on port', port);
});
