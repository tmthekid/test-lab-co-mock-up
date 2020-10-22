import React from 'react';
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

const Results = () => {
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
  );
};
export default Results;
