import React, { useState } from 'react';
import { Grid, Snackbar, Alert } from '@mui/material';
import BookCard from '../components/BookCard';

function Home() {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleBorrow = (book) => {
    const newSelectedBooks = [...selectedBooks, book];
    setSelectedBooks(newSelectedBooks);
    localStorage.setItem('cart', JSON.stringify(newSelectedBooks));
    setSnackbarMessage(`${book.title} has been added to your cart.`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const books = [
    {
      title: 'Origin',
      author: 'Dan Brown',
      description:
        'Robert Langdon, Harvard professor of symbology, arrives at the ultramodern Guggenheim Museum Bilbao to attend the unveiling of a discovery that “will change the face of science forever.',
      image: 'origin.jpg',
    },
    {
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      description:
        'In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential...',
      image: 'power.jpg',
    },
    {
      title: 'Good Energy',
      author: 'Casey Means MD',
      description:
        'What if depression, anxiety, infertility, insomnia, heart disease, erectile dysfunction, type 2 diabetes, Alzheimer’s, dementia, cancer and many other health conditions...',
      image: 'energy.jpg',
    },
    {
      title: 'Never Lie',
      author: 'Freida McFadden',
      description:
        "Newlyweds Tricia and Ethan are searching for the house of their dreams. They think they've found it when they visit the remote manor that once belonged to Dr. Adrienne Hale,....",
      image: 'neverlie.jpg',
    },
    {
      title: 'A Brief History of Time',
      author: ' Stephen Hawking',
      description:
        'A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? ',
      image: 'stephen.jpg',
    },
    {
      title: 'The Hunger Games',
      author: ' Suzanne Collins',
      description:
        'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Long ago the districts waged war on the Capitol and were defeated.',
      image: 'huntergames.jpg',
    },
    {
      title: 'Life After Life',
      author: 'Kate Atkinson',
      description:
        'What if you could live again and again, until you got it right? On a cold and snowy night in 1910, Ursula Todd is born to an English banker and his wife. She dies before she can draw her first breath.',
      image: 'kate.jpg',
    },
    {
      title: 'Born to Run',
      author: 'Christopher McDougall',
      description:
        "Isolated by Mexico's deadly Copper Canyons, the blissful Tarahumara Indians have honed the ability to run hundreds of miles without rest or injury. In a riveting narrative, award-winning journalist and...",
      image: 'borntorun.jpg',
    },
  ];

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BookCard book={book} onBorrow={() => handleBorrow(book)} />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%', backgroundColor: '#3c096c', color: '#FAF1FF' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;
