import React, { FC } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Summary from '../components/Summary';
import BFE from '../components/BFE';
import DifferentialPressure from '../components/DifferentialPressure';
import PFE from '../components/PFE';
import SBP from '../components/SBP';
import FlameSpread from '../components/FlameSpread';
import { RouteComponentProps } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

type Props = { id: string };

const Results: FC<RouteComponentProps<Props>> = ({ match }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <img
        src="https://global-uploads.webflow.com/5ef13400d029f3b0a4f5b6ba/5f08bf35621be66833f183a7_logo-256x256.png"
        style={{ width: '6.5rem', position: 'absolute' }}
      />
      <h1
        style={{
          fontSize: '1.5rem',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        Online Verification System
      </h1>
      <h3 style={{ fontSize: '1rem', textAlign: 'center' }}>
        Certificate # {match.params.id}
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid rgba(0, 0, 0, .2)',
          padding: '25px 60px',
          marginTop: '45px',
          marginBottom: '25px',
        }}
      >
        <div>
          <strong style={{ textTransform: 'uppercase', fontSize: '15px' }}>
            Issued To
          </strong>
          <p style={{ fontWeight: 'bold' }}>Company Name</p>
          <p style={{ fontWeight: 'bold' }}>123 Anywhere St.</p>
          <p style={{ fontWeight: 'bold' }}>New York NY 813002</p>
          <p style={{ fontWeight: 'bold' }}>Phone: 615-212-5565</p>
          <p style={{ fontWeight: 'bold' }}>info@compnay.com</p>
        </div>
        <div>
          <strong style={{ textTransform: 'uppercase', fontSize: '15px' }}>
            Test Details
          </strong>
          <p style={{ fontWeight: 'bold' }}>Test Date: Sept 20, 2019</p>
          <p style={{ fontWeight: 'bold' }}>Lab Location: Amherst</p>
          <p style={{ fontWeight: 'bold' }}>Technician: Billy Bob</p>
          <p style={{ fontWeight: 'bold' }}>Authority: Steven tyler</p>
        </div>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs"
          >
            <Tab label="Summary" {...a11yProps(0)} />
            <Tab label="BFE" {...a11yProps(1)} />
            <Tab label="Differential Pressure" {...a11yProps(2)} />
            <Tab label="PFE" {...a11yProps(3)} />
            <Tab label="SBP" {...a11yProps(4)} />
            <Tab label="Flame Spread" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Summary />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <BFE />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <DifferentialPressure />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <PFE />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <SBP />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <FlameSpread />
          </TabPanel>
        </SwipeableViews>
      </div>
    </>
  );
};
export default Results;
