import React, { useEffect } from 'react';
import  CircularProgress  from '@material-ui/core/CircularProgress'
import  Box  from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useSelector, useDispatch } from 'react-redux';
import {
   tick,
   selectSeconds,
   selectMinutes,
   selectPercentage
  } from './timerSlice';
  import styles from './Timer.module.css';

   function Timer() {
   
   const dispatch = useDispatch()
   const minutes = useSelector(selectMinutes);
   const seconds = useSelector(selectSeconds);
   const percentage = useSelector(selectPercentage);

    useEffect( () => {
        setInterval( () => { dispatch(tick())}, 1000)
    }, []);
      
       return (  <div  style = {{display: 'inline'}} >
            <Box position="relative" display="inline-flex">
               <CircularProgress style = { {height: '100px', width: '100px' }} variant = 'static' value={ percentage } />
               <Box 
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  >
                  <Typography style = {{ fontSize: '30px' }}
                     variant="caption"
                     component="div"
                     color="textSecondary"
                  >{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Typography>
               </Box>
            </Box>
            </div> )
        
}

 export default Timer