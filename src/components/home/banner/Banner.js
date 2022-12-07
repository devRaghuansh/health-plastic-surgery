import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  Banner: {
    background: "url(./img/pls-24.jpg)",
    width: "100%",
    float: "left",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: '#0000008f',
    backgroundBlendMode: 'multiply',
    position:'relative',
  },
  row: {
    width: "100%",
    clear: "both",
    position:'absolute',
    bottom:'150px',
    right:'0',
    padding: '0 20rem',
    
  },
  col:{
    textAlign: "initial",
    display: 'block',
    "& span": {
      background: "#0e3055",
      color: "#fff",
      padding: "5px 10px",
      textTransform: "uppercase",
      fontSize: "10px",
    },
    "& h1": {
      color: "#fff",
      fontSize: "4rem",
      fontWeight: "600",
      textTransform: "capitalize",
      marginBottom: '15px',
    },
  },
  content:{
    display:'flex',
    alignItems:'baseline',
    textAlign:'initial',
    // width: '50%',
    color: '#fff',
    "& p":{
      fontSize:'11px',
    }
  },
  btn:{
    width:'20%',
    "& span":{
        color:' #fff',
        padding: '5px 10px',
        fontSize: '17px',
        background: 'none',
        textTransform: 'uppercase',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
    }
  }
   
  
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Banner}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.col}>
            <span>plastic surgery</span>
            <Typography variant="h1" gutterBottom>
              this is the <br></br>best clinic
            </Typography>
            <Box className={classes.content}>
              <Box className={classes.btn}>
                <span>
                  shope <ArrowForwardIosIcon />
                </span>
              </Box>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
