import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Contect: {
    width: "100%",
    float: "left",
    clear: "both",
    marginTop: "-121px",
    position:'relative',
    zIndex:'11'
  },

  row: {
    background: "#6EC1E4",
    display: "flex",
    borderLeft: "#0E3055 4px solid",
    padding: "3rem 0",
  },
  content: {
    width: "42.083%",
    textAlign: "initial",
    "& h2": {
      color: "#FFFFFF",
      fontFamily: "'DM Sans', Sans-serif",
      fontSize: "50px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "1px",
      marginBottom: '15px',
    },
    "& p": {
      color: "#FFFFFF",
      fontFamily: "'DM Sans', Sans-serif",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "2em",
      letterSpacing: "1px",
      padding: '0 68px',
    },
  },
  drec: {
    width: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h3": {
      color: "#FFFFFF",
      fontFamily: "'DM Sans', Sans-serif",
      fontSize: "10px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "4px",
      transform: "rotate(90deg)",

    },
  },
  fromdiv: {
    width: "47.583%",
    paddingRight: '52px',
    "& div": {
      display: "flex",
      width:'100%',
      gap: "30px",
      marginBottom: "15px",
      "& button":{
        fontSize: '16px',
        fontWeight: 'normal',
        textTransform: 'uppercase',
        padding: '10px 20px 10px 20px',
        width: '100%',
        color: '#ffffff',
        backgroundColor: '#0E3055',
        borderWidth: '0px 0px 1px 0px',
        borderColor: '#0E3055',
        borderRadius: '0px',
      },
      "& input": {
        color: "#FFFFFF",
        fontFamily: "'DM Sans', Sans-serif",
        fontSize: "16px",
        fontWeight: "normal",
        lineHeight: "1em",
        letterSpacing: "1px",
        padding: "10px 20px 10px 20px",
        width: "100%",
        backgroundColor: "#FFFFFF00",
        borderWidth: "0px 0px 1px 0px",
        borderColor: "#f1f1f1",
        borderRadius: "0px",
      },
    },
  },
});

const Contect = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Contect}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.drec}>
            <Typography variant="h3">CONTACT US</Typography>
          </Box>
          <Box className={classes.content}>
            <Typography variant="h2">Get in Touch</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
              nunc eros. Suspendisse scelerisque felis.
            </Typography>
          </Box>
          <Box className={classes.fromdiv}>
            <Box
              component="form"
              className={classes.from}
              // sx={{
              //   "& > :not(style)": { m: 1, width: "25ch" },
              // }}
              // noValidate
              // autoComplete="off"
            >
              <Box>
                <TextField
                  id="standard-basic"
                  placeholder="Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  placeholder="Email"
                  variant="standard"
                />
              </Box>
              <Box>
              <TextField
                  id="standard-basic"
                  placeholder="Message"
                  variant="standard"
                />
                <Box style={{display:'block'}}>
                <Button variant="contained">Contact</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contect;
