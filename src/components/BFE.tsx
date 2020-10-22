import React, { FC } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const headers = [
  'Specimen #',
  'Total CFU Recovered',
  'Percent BFE (%)',
  'Specimen (Pass/Fail)',
  'FINAL RESULT',
];

const BFE: FC = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        Bacterial Filtration Efficiency
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
                    headers.length - 1 === i ? { background: '#40c4ff' } : {}
                  }
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1-1</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">{'> 99.9'}</TableCell>
              <TableCell align="center">Pass</TableCell>
              <TableCell
                align="center"
                rowSpan={5}
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass any Level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-2</TableCell>
              <TableCell align="center">{'<1'}</TableCell>
              <TableCell align="center">{'>99.9'}</TableCell>
              <TableCell align="center">Pass</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-3</TableCell>
              <TableCell align="center">{'<1'}</TableCell>
              <TableCell align="center">{'>99.9'}</TableCell>
              <TableCell align="center">Pass</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BFE;
