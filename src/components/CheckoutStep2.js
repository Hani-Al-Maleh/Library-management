import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function CheckoutStep2({ onNext, onBack, setCardInfo }) {
  const [cardNumber, setCardNumber] = useState('');

  const handleSubmit = () => {
    setCardInfo({ cardNumber });
    onNext();
  };

  const isFormValid = cardNumber.trim() !== '';

  return (
    <div>
      <TextField
        label="Library Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button 
        sx={{
          backgroundColor: '#3C096C',
          color: '#FAF1FF',
          fontWeight: 'bold',
          mr: 4,
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
        onClick={handleSubmit} 
        variant="contained" 
        color="primary"
        disabled={!isFormValid}
      >
        Next
      </Button>
    </div>
  );
}

export default CheckoutStep2;
