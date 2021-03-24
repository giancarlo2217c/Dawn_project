import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

export default function Survey(props) {

   const options = props.options;
   

    function buttonsMkr(opts = options, ) {
        const buttonsArr = [];

        opts.map( (opt) => { 
        
        buttonsArr.push({
            option: opt,
            clicked: false,
                backgroundColor: '#70adb5',
            
           })
        }
        )
        return buttonsArr
    }

   const [buttons, setButton] = useState(buttonsMkr) 

function handleClick(button) {

    console.log(button)

    const newBtns = buttonsMkr()

    for(var i = 0; i < newBtns.length ; i++) {
        if(button.option === (newBtns[i]).option) {
            newBtns[i].backgroundColor = 'grey'
        } else {
            newBtns[i].backgroundColor = '#70adb5'
        }

    }

    setButton(newBtns)
    console.log(newBtns)
 } 

 useEffect( () => {
    buttonsMkr() }
, []);
  


   const useStyles = makeStyles((theme) => ( {
        questions: {
            fontFamily: 'Epilogue',
            fontSize: '20px'
        },

        buttons: {
            marginLeft: '20px',
            marginRight: '20px'
        }

    }))

    const classes = useStyles()

    console.log('buttons: ' + buttons)

    return(
        
        <div >
        <Grid container spacing = {3} justify = 'center'>

            <Grid container item justify = 'center' direction = 'row' >
                <Grid item xs = {6} > <h2 className = {classes.questions} > {props.question} </h2> </Grid>
            </Grid>

            <Grid container item justify = 'center'> 
            
            { buttons.map((button, index) => {
            return ( 
            <Grid item>
            <Button
            variant = 'contained' 
            color = 'secondary' 
            className = {classes.buttons}
            style = {{backgroundColor: button.backgroundColor}}
            onClick = {() => {handleClick(button)}} 
            > { button.option } </Button> </Grid>)
            })}

            </Grid>
        </Grid>

        </div>
    )
}
 


