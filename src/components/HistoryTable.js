import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

function HistoryTable({ history }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Total Books</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((record, index) => (
          <TableRow key={index}>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.totalBooks}</TableCell>
            <TableCell>{record.status}</TableCell>
            <TableCell>
              {new Date() > new Date(record.returnDate) && (
                <Button>Mark as Returned</Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default HistoryTable;
