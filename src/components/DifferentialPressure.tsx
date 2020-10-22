import React, { FC } from 'react';
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

const DifferentialPressure: FC = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        DIFFERENTIAL PRESSURE
      </h4>
      <TableContainer component={Paper}>
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
              <TableCell rowSpan={6} align="center">
                1-1
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">3.4</TableCell>
              <TableCell
                rowSpan={6}
                align="center"
                style={{ fontWeight: 'bold' }}
              >
                PASS
              </TableCell>
              <TableCell
                rowSpan={30}
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                PASS Any Level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">3.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">3.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                AVERAGE
              </TableCell>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                3.7
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={6} align="center">
                1-2
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">4.0</TableCell>
              <TableCell
                rowSpan={6}
                align="center"
                style={{ fontWeight: 'bold' }}
              >
                PASS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">3.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">3.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                AVERAGE
              </TableCell>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                3.8
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={6} align="center">
                1-3
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">4.0</TableCell>
              <TableCell
                rowSpan={6}
                align="center"
                style={{ fontWeight: 'bold' }}
              >
                PASS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">4.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">5.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">4.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                AVERAGE
              </TableCell>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                4.5
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={6} align="center">
                1-4
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">3.6</TableCell>
              <TableCell
                rowSpan={6}
                align="center"
                style={{ fontWeight: 'bold' }}
              >
                PASS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">5.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">4.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                AVERAGE
              </TableCell>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                4.1
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={6} align="center">
                1-5
              </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">3.9</TableCell>
              <TableCell
                rowSpan={6}
                align="center"
                style={{ fontWeight: 'bold' }}
              >
                PASS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">4.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                AVERAGE
              </TableCell>
              <TableCell
                align="center"
                style={{ background: '#cbaf87', fontWeight: 'bold' }}
              >
                4.1
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DifferentialPressure;
