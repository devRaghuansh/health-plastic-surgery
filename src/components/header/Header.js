import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import Logo from "./Logo";
import Navbar from "./Nav";

const useStyles = makeStyles({
  Header: {
    width: "100%",
    float: "left",
    clear: "both",
    position: "absolute",
    left: 0,
    top: 0,
    padding: '2rem 0',
  },
  container: {
    width: "89%",
    margin: "auto",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  col: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap:'30px',
    color: '#fff',
  },
  Navbar: {
    display: "flex",
  },
  Navbar: {
    width: "80%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: '18px',
    borderLeft: '5px solid #6EC1E4',
    paddingLeft: '16px',
  },
  book: {
    width:"20%",
    "& Button": {
      fontFamily: "'DM Sans', Sans-serif",
      width: "max-content",
      fontSize: "15px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "3px",
      fill: "#FFFFFF",
      color: "#FFFFFF",
      backgroundColor: "#65BDC2",
      borderRadius: "0px 0px 0px 0px",
      padding: "25px 50px 25px 50px",
    },
  },
  call: {
    "& p":{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    fontFamily: "Roboto, Sans-serif",
    fontSize: "10px",
    fontWeight: "normal",
    textTransform: "uppercase",
    lineHeight: '1em',
    letterSpacing: '4px',
    }
  },
  news:{
    padding: '5px 10px 5px 10px',
    color: '#ffffff',
    backgroundColor: '#65BDC2',
  }
  
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Header}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Box className={classes.col}>
            <Box className={classes.call}>
              <Typography> <span> <CallIcon /></span>ST. LAMBOR, NEW YORK ( US )</Typography>
            </Box>
            <Box className={classes.call}>
              <Typography>
                <span className={classes.news}>NEWS</span>This is the latest News !
              </Typography>
            </Box>
            <Box className={classes.call}>
              <Typography><span><TelegramIcon /> </span>CLINIC : + 31 2349334972</Typography>
            </Box>
          </Box>
          <Box className={classes.col}>
            <Box className={classes.Navbar}>
              <Logo />
              <Navbar />
            </Box>
            <Box className={classes.book}>
              <Button href="">
                <span>BOOK NOW</span>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
