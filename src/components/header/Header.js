import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
import Logo from './Logo';
import Navbar from './Nav';


const useStyles = makeStyles({
    Header:{
        width:'100%',
        float:'left',
        clear:'both'
    },
    container:{
      width:'89%',
      margin:'auto',

    },
    row:{
      width:'100%',
      float:'left',
      clear:'both'
    },
    col:{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between',
    },
    Navbar:{
      display:'flex'
    },
    Navbar:{
      width:'100%',
      background:'#fff',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
    },
    book:{
      "& Button":{
        fontFamily: "'DM Sans', Sans-serif",
        width: 'max-content',
        fontSize: '15px',
        fontWeight: 'normal',
        lineHeight: '1em',
        letterSpacing: '3px',
        fill: '#FFFFFF',
        color: '#FFFFFF',
        backgroundColor: '#65BDC2',
        borderRadius: '0px 0px 0px 0px',
        padding: '25px 50px 25px 50px',
      }
     
    },
    call:{
      display:"flex",
      alignItems:'center',
      justifyContent:'space-between',
      gap: '15px',
    },

})


const Header = () => {
    const classes = useStyles();
  return (
    <Box className={classes.Header}>
      <Box className={classes.container}>
      <Box className={classes.row}>
        <Box className={classes.col}>
        <Box className={classes.call}>
            <span><CallIcon/></span>
            <Typography>ST. LAMBOR, NEW YORK ( US )</Typography>
        </Box>
        <Box>
            <Typography><span>NEWS</span>This is the latest News !</Typography>
        </Box>
        <Box className={classes.call}>
            <span><TelegramIcon/></span>
            <Typography>CLINIC : + 31 2349334972</Typography>
        </Box>
        </Box>
        <Box className={classes.col}>
          <Box className={classes.Navbar}>
          <Logo/>
          <Navbar/>
          </Box>
          <Box className={classes.book} >
            <Button href=""><span>BOOK NOW</span></Button>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default Header
