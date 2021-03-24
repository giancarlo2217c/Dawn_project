import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Button, Paper } from '@material-ui/core'
import SimpleTabs from '../tabs/tabs'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor:'white',
  },

  tabs : {
    marginTop: '20px',
    marginBottom: '20px'
  },

  logo: {
    flexGrow: 1,
  },

  logoImage: {
    float: 'left',
    width: '50px',
    height: '60px',
    marginTop: '20px',
    position: 'relative',
    left: '100px'
  }
}));

export function NavBar() {
    const classes = useStyles()

    return (
    <div className = {classes.root}>
      <Paper  >
      <Grid container spacing = {0} direction = 'row' >
        <Grid container item justify = 'flex-start' xs = {6}>
          <Grid className = {classes.logo} item xs = {12}>
          <img src="https://uploads-ssl.webflow.com/5f348bae2e29bd0ac708087a/5f3c43518d55f36e004069a8_Group%2031.png" className = {classes.logoImage}/>
          </Grid>
        </Grid>
        <Grid className = {classes.tabs } container item justify = 'flex-end' xs = {6} >
          <SimpleTabs/>
        </Grid>
      </Grid>
      </Paper>
    </div>
          );
      }
