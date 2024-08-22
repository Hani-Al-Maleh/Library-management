import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Checkbox,
  Select,
  MenuItem,
  Card,
  Grid,
  Box,
} from '@mui/material';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [borrowPeriod, setBorrowPeriod] = useState(1); // Default to 1 week
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add books to proceed.');
      return;
    }

    if (agreed) {
      localStorage.setItem('borrowPeriod', JSON.stringify(borrowPeriod)); // Save borrow period
      navigate('/checkout');
    } else {
      alert('You must agree to the terms and conditions.');
    }
  };

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + borrowPeriod * 7);

  return (
    <Box
      sx={{
        padding: '20px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Your cart is empty. Please add books to borrow.
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ width: '100%', justifyContent:'center' }} >
          <Grid item xs={12} md={12}>
            {cartItems.map((item, index) => (
              <CartItem key={index} book={item} />
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                padding: '20px',
                borderRadius: 5,
                backgroundColor: '#FAF1FF ',
                color: '#3C096C',
                border: '4px solid #3c096c',
                boxShadow: '0 0 12px 0 #3c096c',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ mb: 2 }} variant="h6">
                Borrowing Period:
              </Typography>
              <Select
                sx={{ color: '#3C096C', mb: 4, width: '100%' }}
                value={borrowPeriod}
                onChange={(e) => setBorrowPeriod(e.target.value)}
              >
                <MenuItem value={1}>1 Week</MenuItem>
                <MenuItem value={2}>2 Weeks</MenuItem>
                <MenuItem value={4}>1 Month</MenuItem>
              </Select>
              <Typography sx={{ mb: 4 }} variant="h6">
                Return Date: {returnDate.toLocaleDateString()}
              </Typography>
              <Typography sx={{ mb: 4 }} variant="h6">
                Total Books: {cartItems.length}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  sx={{
                    color: '#3C096C',
                    '&.Mui-checked': {
                      color: '#3C096C',
                    },
                  }}
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <Typography variant="body2">
                  I agree to the terms and conditions
                </Typography>
              </Box>
              <Button
                sx={{
                  marginTop: '20px',
                  backgroundColor: '#3c096c',
                  color: '#FAF1FF',
                  '&:hover': {
                    backgroundColor: '#FAF1FF',
                    color: '#3c096c',
                  },
                  width: '100%',
                }}
                onClick={handleCheckout}
                variant="contained"
                color="primary"
                disabled={cartItems.length === 0}
              >
                Checkout
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Cart;
