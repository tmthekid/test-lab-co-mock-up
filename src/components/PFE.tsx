import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import React from 'react';

const headers = [
  'Specimen #',
  'Specimen Counts',
  'Average Control Counts',
  'Filtration Efficiency (%)',
  'Specimen (Pass/Fail)',
  'FINAL RESULT',
];

const PFE = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        PARTICLE FILTRATION EFFICIENCY
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
              <TableCell align="center">63,463</TableCell>
              <TableCell align="center">922</TableCell>
              <TableCell align="center">99</TableCell>
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
              <TableCell align="center">60,684</TableCell>
              <TableCell align="center">1,297</TableCell>
              <TableCell align="center">98</TableCell>
              <TableCell align="center">Pass</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-3</TableCell>
              <TableCell align="center">65,788</TableCell>
              <TableCell align="center">756</TableCell>
              <TableCell align="center">99</TableCell>
              <TableCell align="center">Pass</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-4</TableCell>
              <TableCell align="center">63,494</TableCell>
              <TableCell align="center">817</TableCell>
              <TableCell align="center">99</TableCell>
              <TableCell align="center">Pass</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">1-5</TableCell>
              <TableCell align="center">62,503</TableCell>
              <TableCell align="center">1,212</TableCell>
              <TableCell align="center">98</TableCell>
              <TableCell align="center">Pass</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PFE;
