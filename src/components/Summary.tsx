import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const headers = [
  'Specimen ID',
  'Area ID',
  'Differential Pressure (mmH2O/cm2)',
  'Specimen Pass/Fail',
  'FINAL RESULT',
];

const Summary = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((h: string, i: number) => (
              <TableCell key={i} align="center">
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={2} align="center">
              1-1
            </TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">3.4</TableCell>
            <TableCell rowSpan={2} align="center">
              PASS
            </TableCell>
            <TableCell rowSpan={2} align="center">
              PASS Any Level
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">3.4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Summary;
