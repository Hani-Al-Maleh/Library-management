// src/components/CheckoutStep3.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CheckoutStep3({ onBack, personalInfo, cardInfo }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const borrowPeriod = JSON.parse(localStorage.getItem('borrowPeriod')) || 1;

    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + borrowPeriod * 7); // Calculate correct return date

    // Get existing history from localStorage
    const history = JSON.parse(localStorage.getItem('history')) || [];

    // Add the current borrowing session to the history
    const newEntry = {
      date: new Date().toISOString(),
      books: cartItems,
      returnDate: returnDate.toISOString(), // Save correct return date
      returned: false,
    };

    history.push(newEntry);

    // Save the updated history back to localStorage
    localStorage.setItem('history', JSON.stringify(history));

    // Clear the cart and proceed
    localStorage.removeItem('cart');
    localStorage.removeItem('borrowPeriod');

    alert('Books borrowed successfully!');
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div>
      <Typography variant="h6">Confirm Borrowing</Typography>
      <Button
        sx={{
          backgroundColor: '#3C096C',
          color: '#FAF1FF',
          fontWeight: 'bold',
          mr:4,
          '&:hover': {
            color: '#3C096C',
            backgroundColor: '#FAF1FF',
          },
        }}
        onClick={onBack}
      >
        Back
      </Button>
      <Button
        sx={{
          backgroundColor: '#3C096C',
          color: '#FAF1FF',
          fontWeight: 'bold',
          '&:hover': {
            color: '#3C096C',
            backgroundColor: '#FAF1FF',
          },
        }}
        onClick={handleConfirm}
        variant="contained"
        color="primary"
      >
        Confirm Borrowing
      </Button>
    </div>
  );
}

export default CheckoutStep3;
