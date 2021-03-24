import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
  tabs: {
    float: 'right',
    position: 'relative',
    right: '150px'
  },
  tab : {
    fontSize: '25px',
    fontFamily: 'Raleway',
    color: 'black',
    fontWeight: 'bold'
  }
}));

export default function SimpleTabs() {  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Tabs className = {classes.tabs} value={window.location.pathname} onChange={handleChange} aria-label="simple tabs example">
          <Tab className = {classes.tab} label="Item One" {...a11yProps(0)} />
          <Tab className = {classes.tab} label="Item Two" {...a11yProps(1)} />
        </Tabs>
    </div>
  );
}
