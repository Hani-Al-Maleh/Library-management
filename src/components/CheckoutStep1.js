import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function CheckoutStep1({ onNext, setPersonalInfo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    setPersonalInfo({ name, email });
    onNext();
  };

  const isFormValid = name.trim() !== '' && email.trim() !== '';

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
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

export default CheckoutStep1;
