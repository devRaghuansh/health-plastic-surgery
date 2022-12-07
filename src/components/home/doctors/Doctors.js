import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CountUp from "react-countup";

const data = [
  { name: "STAFF", nam: 23 },
  { name: "DOCTORS", nam: 56 },
  { name: "VISITS", nam: 46 },
];

const usestyles = makeStyles({
  doctors: {
    width: "100%",
    float: "left",
    clear: "both",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    padding: "105px 0px 40px 0px",
    background:
      "url(./img/pr-32.jpg),linear-gradient(180deg, #FFFFFF -100%, #FFFFFFBF 100%)",
    backgroundBlendMode: "color",
    borderTop: "1px solid #F1F1F1",
  },
  col_a: {
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
      color: " #2E2E2E",
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "50px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "1px",
    marginTop: '20px',

    },
  },
  col_b: {
    display: "flex",
    backgroundImage:
      "linear-gradient(to right, #65BDC2 -48%, #c3c6cd 55%, #0E3055 101%)",
    alignItems: "center",
    marginTop: '50px',
  },
  Lipoflex: {
    display: "flex",
    padding: "0px 30px 0px 30px",
    "& img": {
      width: "100px",
    },
  },
  Liporow: {
    textAlign: "initial",
    "&>div": {
      padding: "0px 20px 0px 20px",
    },
    "& h4": {
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "1.6em",
      letterSpacing: "1px",
      color: "#fff",
      marginBottom: "11px",
    },
    "& p": {
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "1.6em",
      letterSpacing: "1px",
      color: "#fff",
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
    },
  },
  a: {
    width: "33.33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "50px",
    padding: "0px 0px 0px 20px",
  },
  b: {
    width: "33.33%",
    paddingTop: "27px",
  },
  c: {
    width: "33.33%",
    color: "#fff",
    textAlign: "center",
    padding: "0px 50px 0px 50px",

    "& h2": {
      fontSize: "30px",
      fontWeight: "normal",
      lineHeight: "1.2em",
      letterSpacing: "2px",
      marginBottom: "20px",
    },
    "& p": {
      fontSize: "14px",
    },
  },
  parse: {
    width: "100%",
    float: "left",
    background: "#eeeeee",
    marginBottom: "20px",
    borderRadius: "2px",
    overflow: "hidden",
    "&>div": {
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
      color: "#fff",
      background: "#65BDC2",
      fontSize: "11px",
      height: "30px",
      lineHeight: "30px",
      alignItems: "center",
      padding: "0 12px",
    },
  },
  parse1: {
    width: "100%",
    float: "left",
    background: "#eeeeee",
    marginBottom: "15px",
    borderRadius: "2px",
    overflow: "hidden",
    "&>div": {
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      color: "#fff",
      background: "#0E3055",
      fontSize: "11px",
      height: "30px",
      lineHeight: "30px",
      alignItems: "center",
      padding: "0 12px",
    },
  },
  count: {
    display: "flex",
    width: "100%",
    float: "left",
    justifyContent: "space-around",
    fontFamily: "'DM sans', sans-serif",
    marginTop:'20px',
    "& span": {
        color: "#FFFFFF",
        fontSize: "30px",
        lineHeight: "1em",
        fontWeight: 600,
      },
      "& p": {
        color: "#FFFFFF",
        fontSize: "14px",
        lineHeight: "2.5",
        fontWeight: 400,
        letterSpacing: '4px',
      },
  },
});

const Doctors = () => {
  const classes = usestyles();
  return (
    <Box className={classes.doctors}>
      <Box className="container">
        <Box className="row">
          <Box className={classes.col_a}>
            <span>CERTIFICATES</span>
            <Typography variant="h2">Our Main Doctors</Typography>
          </Box>
          <Box className={classes.col_b}>
            <Box className={classes.a}>
              <Box className={classes.Lipoflex}>
                <img src="./img/pls-21.jpg" alt="aa" />
                <Box className={classes.Liporow}>
                  <Box>
                    <Typography variant="h4">Mark Hill</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Lorem ipsum dolor sit amet, cons ectetur.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.Lipoflex}>
                <img src="./img/pls-19.jpg" alt="aa" />
                <Box className={classes.Liporow}>
                  <Box>
                    <Typography variant="h4">Jane Cullen</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Lorem ipsum dolor sit amet, conse ctetur.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.Lipoflex}>
                <img src="./img/pls-18.jpg" alt="aa" />
                <Box className={classes.Liporow}>
                  <Box>
                    <Typography variant="h4">Annah Gaiver</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Lorem ipsum dolor sit amet, cons ectetur.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.b}>
              <img
                src="./img/doctor-isolated.png"
                alt="a"
                style={{ height: "495px", width: "auto", margin: "auto" }}
              />
            </Box>
            <Box className={classes.c}>
              <Typography variant="h2">At Your Service</Typography>
              <Typography style={{ marginBottom: "30px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque
              </Typography>
              <Box className={classes.parse}>
                <Box>
                  <Typography>Liposuction</Typography>
                  <Typography>80%</Typography>
                </Box>
              </Box>
              <Box className={classes.parse1}>
                <Box>
                  <Typography>Breast Augmentation</Typography>
                  <Typography>90%</Typography>
                </Box>
              </Box>
              <Box className={classes.count}>
                {data.map((item, i) => (
                  <Box key={i}>
                    <CountUp end={item.nam} />
                    <Typography>{item.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Doctors;
