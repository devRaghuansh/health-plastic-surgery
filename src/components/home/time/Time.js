import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  time: {
    width: "100%",
    float: "left",
    clear: "both",
    padding: "120px 0px 100px 0px",
    background:
      "url(./img/pr-01.jpg),linear-gradient(90deg, #173053E8 0%, #17305340 100%)",
    backgroundBlendMode: "multiply",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  row: {
    width: "100%",
    clear: "both",
    display: "flex",
    alignItems: 'center',
    "& >div": {
      width: "50%",
    },
  },
  call1: {
    color: " #fff",
    textAlign: "initial",
    "&>p":{
        marginBottom: '20px',
        fontSize: '14px',
    lineHeight: '2em',
    letterSpacing: '1px',
    },
    "& span": {
      backgroundColor: "#65BDC2",
      padding: "5px 10px 5px 10px",
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "10px",
      fontWeight: "normal",
      lineHeight: "1.6em",
      letterSpacing: "1px",
      color: "#fff",
      marginBottom: "20px",
    },
    "& h2": {
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "50px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "1px",
      margin: "20px 0",
    },
  },
  cal_row: {
    display: "flex",
    "&>div": {
      width: "50%",
    },
  },
  cal_row1: {
    width: "100%",
    margin: "0px 20px 0px 0px",
    zIndex: "9",
  },
  cal_row2: {
    width: "100%",
    padding: "0px 35px 0px 5px",
    "&>div": {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "25px",
      alignItems: "center",
      "& a": {
        textDecoration: "none",
        "& span": {
          backgroundColor: "#FFFFFF2B",
          padding: "5px 10px 5px 10px",
          letterSpacing: "4px",
        },
      },
      "& p":{
        letterSpacing:' 4px',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",

      }
    },
  },
  namber:{
    background: "url(./img/bg-3.jpg), #65BDC2",
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    marginTop: '-85px',
    marginBottom: '0px',
    padding: '20px 24px 20px 0px',
    backgroundBlendMode:'multiply',
    textAlign:'end',
    "&>p":{
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: '2.9px',
        fontSize: '30px',
    }
  },
  clc:{
    padding: '0px 0px 0px 80px',
    width:'100%',
  }
});

const Time = () => {
  const classes = usestyles();
  return (
    <Box className={classes.time}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.call1}>
            <span>BOOK AN APPOINTMENT</span>
            <Typography variant="h2">Our Timing</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
              nunc erosuspe ndisse scelerisque felis ante, et mattis felis
              scelerisque sodales.
            </Typography>
            <Box className={classes.cal_row}>
              <Box>
                <Box className={classes.cal_row1}>
                  <img src="./img/doctor-2.png" alt="dd" />
                </Box>
              </Box>
              <Box>
                <Box className={classes.cal_row2}>
                  <Box>
                    <Typography>MONDAY </Typography>
                    <Link href="">
                      <span>9 TO 18</span>
                    </Link>
                  </Box>
                  <Box>
                    <Typography>TUESDAY </Typography>
                    <Link href="">
                      <span>9 TO 18</span>
                    </Link>
                  </Box>
                  <Box>
                    <Typography>WEDNESDAY </Typography>
                    <Link href="">
                      <span>9 TO 18</span>
                    </Link>
                  </Box>
                  <Box>
                    <Typography>THURSDAY </Typography>
                    <Link href="">
                      <span>9 TO 18</span>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.namber}>
                <Typography>+1 561 842 6141</Typography>
            </Box>
          </Box>
          <Box>
            <Box className={classes.clc}>
            <img src="./img/Capture.PNG" alt="a" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Time;
