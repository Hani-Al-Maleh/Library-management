import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

function BookCard({ book, onBorrow }) {
  return (
    <Card
      sx={{
        maxWidth: '25rem',
        backgroundColor: '#EFDFF8',
        boxShadow: '2px 2px 12px 0px #888',
        height: '100%',
      }}
    >
      <CardMedia
        component="img"
        sx={{ objectFit: 'fill' }}
        height="350rem"
        image={book.image}
        alt={book.title}
      />
      <CardContent sx={{ color: '#10002B' }}>
        <Typography
          sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}
          variant="h5"
        >
          {book.title}
        </Typography>
        <Typography sx={{ marginBottom: '1.2rem' }} variant="subtitle2">
          {book.author}
        </Typography>
        <Typography sx={{ marginBottom: '1.2rem' }} variant="body1">
          {book.description}
        </Typography>
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
          onClick={onBorrow}
          variant="contained"
          color="secondary"
        >
          Borrow Book
        </Button>
      </CardContent>
    </Card>
  );
}

export default BookCard;
