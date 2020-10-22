import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const headers = [
  'Specimen #',
  'Test Pressure(mmHg)',
  'Total Number of Specimens',
  'Number of Pass Specimens',
  'FINAL RESULT',
];

const SBP: FC = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        SYNTHETIC BLOOD PENETRATION
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
              <TableCell align="center">1</TableCell>
              <TableCell align="center">160</TableCell>
              <TableCell align="center">32</TableCell>
              <TableCell align="center">32</TableCell>
              <TableCell
                align="center"
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass for Level 3
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table
          style={{
            borderColor: 'rgba(0, 0, 0, .1)',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Material construction type
              </TableCell>
              <TableCell>Not provided/unknown</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Supplier</TableCell>
              <TableCell>Acme</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Lot number</TableCell>
              <TableCell>21673421</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Date of receipt
              </TableCell>
              <TableCell>September 25, 2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Date of test</TableCell>
              <TableCell>September 28, 2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Fluid velocity (cm/s)
              </TableCell>
              <TableCell>645</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Volume of impact fluid (ml)
              </TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Angle of pneumatic valve to horizontal
              </TableCell>
              <TableCell>2°</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Description target area mask
              </TableCell>
              <TableCell>Blue ripple area</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Distance from tip cannula to mask (in)
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Technique to enhance visual detection
              </TableCell>
              <TableCell>
                Cotton swab used to lightly daub on the surface
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>
                Conditioning parameters
              </TableCell>
              <TableCell>21±5°C, 85±5% R.H for minimum of 4 hours</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SBP;
