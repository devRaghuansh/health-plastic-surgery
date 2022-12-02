import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  About: {
    width: "100%",
    float: "left",
    clear: "both",
    marginBottom: '90px',
  },
  row: {
    width: "100%",
    clear: "both",
    display: "flex",
    "&>div": {
      width: "50%",
    },
  },
  col_a: {
    display: "flex",
    margin: " 32px 0",
    "&>div": {
      width: "18rem",
      marginRight: "37px",
    },
  },
  sign: {
    display: "flex",
    width:'50%',
    justifyContent: 'center',
    padding: '8px',
    "& img":{
        width:'200px',
    }
  },
  dr: {
    display: "flex",
    marginTop: '29px',
  },
  dr1: {
    display: "flex",
    width:'50%',
    "& >div": {
      marginRight: "27px",
      "& p":{
        color: '#2E2E2E',
    fontFamily: "DM Sans, Sans-serif",
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '2em',
    letterSpacing: '1px',
      }
    },
  },
  col1: {
    paddingRight: "7.3rem",
    position: "relative",
  },
  col1a: {
    position: "absolute",
    width: "48%",
    right: "50px",
    bottom: "-50px",
  },
  col2: {
    textAlign: "initial",
    "& a": {
      fill: "#FFFFFF",
      color: "#FFFFFF",
      backgroundColor: "transparent",
      backgroundImage: "linear-gradient(90deg, #65BDC2 0%, #0E3055 100%)",
      borderStyle: "solid",
      borderWidth: "0px 0px 0px 0px",
      borderColor: "#FFFFFF",
      borderRadius: "0px 0px 0px 0px",
      padding: "5px 10px 5px 10px",
    },
    "& h2": {
      color: "#2E2E2E",
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "50px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "1px",
      margin: "24px 0",
    },
    "& p": {
      color: " #5C5C5C",
      fontFamily: "DM Sans, Sans-seri",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "2em",
      letterSpacing: "1px",
    },
  },
});

const About = () => {
  const classes = usestyles();
  return (
    <Box className={classes.About}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.col1}>
            <img src="./img/pls-01.jpg" alt="aa" />
            <Box className={classes.col1a}>
              <img src="./img/pls-02.jpg" alt="" />
            </Box>
          </Box>
          <Box className={classes.col2}>
            <Link href="">
              <span>ABOUT US</span>
            </Link>
            <Typography variant="h2">Plastic Surgery</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
              nunc eros. Suspendisse scelerisque felis ante, et mattis felis
              scelerisque sodales. Aenean id imperdiet lectus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit nulla.
            </Typography>
            <Box className={classes.col_a}>
              <Box>
                <img src="./img/pls-39.jpg" alt="aa" />
              </Box>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis lorem ipsum dolor
              </Typography>
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
              nunc eros. Suspendisse scelerisque felis ante, et mattis felis
              scelerisque sodales. Aenean id imperdiet lectus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit nulla.
            </Typography>
            <Box className={classes.dr}>
              <Box className={classes.dr1}>
                <Box>
                  <img
                    src="./img/pls-03.jpg"
                    alt="s"
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  />
                </Box>
                <Box>
                  <Typography>Stephen Mcmiller</Typography>
                  <span>MAIN DOCTOR</span>
                </Box>
              </Box>
              <Box className={classes.sign}>
                <img src="./img/signature.png" alt="a" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
