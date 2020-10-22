import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import React, { FC } from 'react';

const headers = ['', 'Specimen #', 'RESULT', 'CONCLUSION'];

const FlameSpread: FC = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        FLAME SPREAD
      </h4>
      <TableContainer component={Paper} style={{ marginBottom: '3rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((h: string, i: number) => (
                <TableCell
                  key={i}
                  align="center"
                  style={
                    headers.length - 1 === i ? { background: '#cbaf87' } : {}
                  }
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                rowSpan={5}
                style={{ fontWeight: 'bold' }}
              >
                Specimen #1
              </TableCell>
              <TableCell align="center">1-1</TableCell>
              <TableCell align="center">IBE</TableCell>
              <TableCell
                align="center"
                rowSpan={5}
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                Classified as Class 1 PASS for ANY LEVEL
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-2</TableCell>
              <TableCell align="center">IBE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-3</TableCell>
              <TableCell align="center">IBE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-4</TableCell>
              <TableCell align="center">IBE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-5</TableCell>
              <TableCell align="center">IBE</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FlameSpread;
