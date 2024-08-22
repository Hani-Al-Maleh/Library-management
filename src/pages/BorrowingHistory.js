import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function BorrowingHistory() {
  const [history, setHistory] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const borrowHistory = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(borrowHistory);
  }, []);

  const handleReturn = (index) => {
    const updatedHistory = [...history];
    updatedHistory[index].returned = true;
    setHistory(updatedHistory);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
  };

  if (isSmallScreen) {
    return (
      <Box sx={{ p: 2 }}>
        {history.map((entry, index) => (
          <Box
            key={index}
            sx={{
              mb: 2,
              p: 2,
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <Typography variant="h6">
              Date: {new Date(entry.date).toLocaleDateString()}
            </Typography>
            <Typography>Total Books: {entry.books.length}</Typography>
            <Typography>Return Date: {new Date(entry.returnDate).toLocaleDateString()}</Typography>
            <Typography>Status: {entry.returned ? 'Returned' : 'Not Returned'}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleReturn(index)}
              disabled={entry.returned || new Date() <= new Date(entry.returnDate)}
              sx={{
                mt: 1,
                cursor: entry.returned || new Date() <= new Date(entry.returnDate) ? 'not-allowed' : 'pointer',
              }}
            >
              {entry.returned ? 'Returned' : 'Mark as Returned'}
            </Button>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Total Books</TableCell>
            <TableCell>Return Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry, index) => {
            const isReturnDatePassed = new Date() > new Date(entry.returnDate);

            return (
              <TableRow key={index}>
                <TableCell>{new Date(entry.date).toLocaleDateString()}</TableCell>
                <TableCell>{entry.books.length}</TableCell>
                <TableCell>{new Date(entry.returnDate).toLocaleDateString()}</TableCell>
                <TableCell>{entry.returned ? 'Returned' : 'Not Returned'}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleReturn(index)}
                    disabled={!isReturnDatePassed || entry.returned}
                    sx={{
                      cursor: isReturnDatePassed && !entry.returned ? 'pointer' : 'not-allowed',
                    }}
                  >
                    {entry.returned ? 'Returned' : 'Mark as Returned'}
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BorrowingHistory;
