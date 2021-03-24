import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavBar } from '../components/navBar/NavBar';
import  Timer  from '../features/timer/Timer'
import { Header } from '../components/header/header'
import  Survey  from '../features/survey/Survey'

 function  SurveyPage() {
    
    const useStyles = makeStyles( (theme) => ({
        textField: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            }
        },

        button: {
            marginTop: '20px'
        },

        question: {
            fontFamily: 'Epilogue',
            fontSize: '20px'
        },

        root: {
            width: '100%'
        }

    }));

    const classes =  useStyles();

    const [value, setValue] = React.useState('Controlled')

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        
        <div className = {classes.root}>
        <NavBar />
        <Header/>
        
        <Grid container spacing = {3} justify = 'center' >
        <Grid item ><Timer style = {{textAlign: "center", fontFamily: "Poppins, sans-serif"}} /></Grid>
        </Grid>

        <Survey question = "How are you feeling today?" options = {['amazing', 'good', 'alright', 'been better', 'other']} />
        <Survey question = "why are you here?" options = {['to learn', 'to engage', 'to Share', 'to explore', 'other']} />

        <Grid container spacing = {3} justify = 'center' >
        <Grid container item justify = 'center'>

        <Grid item xs = {3} />
        <Grid item xs = {6} > <h2 className = { classes.question }> if you selected "other" on the previous questions, please elaborate: </h2></Grid>
        <Grid item xs = {3} />

        <Grid item xs = {3} />
        <Grid item xs = {6} > <TextField id = 'filled-multiline-static' label= 'elaborate...' multiline fullWidth rows= {4} default = 'Default Value' variant = 'filled'/> </Grid>
        <Grid item xs = {3} />

        <Grid item xs = {3} />
        <Button className = {classes.button} variant="contained" color="primary" >Submit</Button>
        <Grid item xs = {3} />

        </Grid>
        </Grid>

        </div>
    )
 }

 export default SurveyPage