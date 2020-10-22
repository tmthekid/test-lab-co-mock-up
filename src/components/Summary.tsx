import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const headers = [
  'Characteristic',
  'Level 1 Barrier',
  'Level 2 Barrier',
  'Level 3 Barrier',
  'Summary Results',
];

const Summary: FC = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        Medical Face Mask Material Requirements
      </h4>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((h: string, i: number) => (
                <TableCell
                  key={i}
                  align={i === 0 ? 'left' : 'center'}
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
              <TableCell>Bacterial Filtration Efficiency, %</TableCell>
              <TableCell align="center">≥95</TableCell>
              <TableCell align="center">≥98</TableCell>
              <TableCell align="center">≥98</TableCell>
              <TableCell
                align="center"
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass any Level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Differential Pressure, mm H2O/cm<sup>2</sup>
              </TableCell>
              <TableCell align="center">{`<5.0`}</TableCell>
              <TableCell align="center">{`<6.0`}</TableCell>
              <TableCell align="center">{`<6.0`}</TableCell>
              <TableCell
                align="center"
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass any Level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Sub-Micron Particulate Filtration Efficiency at 0.1 micron, %
              </TableCell>
              <TableCell align="center">≥95</TableCell>
              <TableCell align="center">≥98</TableCell>
              <TableCell align="center">≥98</TableCell>
              <TableCell
                align="center"
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass any Level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Synthetic Blood Penetration minimum pressure in mmHg for pass
                result
              </TableCell>
              <TableCell align="center">80</TableCell>
              <TableCell align="center">120</TableCell>
              <TableCell align="center">120</TableCell>
              <TableCell
                align="center"
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass Level 3
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Flame Spread</TableCell>
              <TableCell align="center">Class 1</TableCell>
              <TableCell align="center">Class 1</TableCell>
              <TableCell align="center">Class 1</TableCell>
              <TableCell
                align="center"
                style={{ background: '#40c4ff', fontWeight: 'bold' }}
              >
                Pass any Level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>OVERALL PERFORMANCE LEVEL</TableCell>
              <TableCell
                align="center"
                colSpan={4}
                style={{ fontWeight: 'bold' }}
              >
                Complete - Level 3
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Summary;
