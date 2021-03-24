import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavBar } from '../components/navBar/NavBar';
import  Timer  from '../features/timer/Timer'
import styles from './Conference.module.css'

const useStyles = makeStyles( (theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '50px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color:  theme.palette.text.secondary,
    },
} ));


function ConferencePage(props) {

    const person = {
        name: 'John Doe',
        profession: 'Dentist',
        age: 27,
        quote: 'soy gil'
    }

    const style  = {display: 'inline'}

    const classes = useStyles();

    return(
        <div>
        <NavBar/>  
        <div className = {classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" spacing = {3} >
        <Grid item xs = {6} >

        <Grid item xs = {12} >
        <div style = {{textAlign: 'center', marginTop: '100px', marginBottom: '40px'} }>
        <Paper className = {classes.paper} style = {{ marginRight: "40px", display: 'inline', fontSize: '18px'}} > What do you think about the current state of affairs of the U.S. and how did it get to this point? </Paper> 
        <Timer time = {3} />
        </div>
        <img style = {{width:"900px", hieght:'800px' }} src = "https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" ></img>
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <h1 > {person.name} </h1>
        <h3 > {person.profession}  {person.age} years old </h3>
        <h3> {person.quote} </h3>
        </Grid>
        </Grid>
        </Grid>
        </div>

        

        </div>
    )
}

export default ConferencePage