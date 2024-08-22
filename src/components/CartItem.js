import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CartItem({ book }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="subtitle1">{book.author}</Typography>
      </CardContent>
    </Card>
  );
}

export default CartItem;
