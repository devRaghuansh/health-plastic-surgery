import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  transformations: {
    width: "100%",
    float: "left",
    clear: "both",
    background:
      "url(./img/pr-05.jpg), linear-gradient(-90deg, #0E3055 0%, #2E2E2E24 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "Cover",
    padding: "120px 0px 120px 0px",
    position: "relative",
    backgroundBlendMode: "multiply",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    display: "flex",
    "&>div": {
      width: "50%",
    },
  },
  col: {
    padding: "0px 50px 0px 0px",
    display: "flex",
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
  },
  col1: {
    padding: "0px 50px 0px 50px",
    textAlign: "initial",
  },
  after: {
    marginBottom: "20px",
    "& a": {
      // fill: #FFFFFF;
      color: " #FFFFFF",
      backgroundColor: "#65BDC2",
      borderStyle: "solid",
      borderWidth: "0px 0px 0px 0px",
      borderColor: "#FFFFFF",
      borderRadius: "0px 0px 0px 0px",
      padding: "5px 10px 5px 10px",
      textDecoration: "none",
      fontSize: "11px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "4px",
    },
    "& h3": {
      color: " #FFFFFF",
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "50px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "1px",
    },
  },
  Lipo: {
    marginBottom: "30px",
  },
  Lipoflex: {
    display: "flex",
    "& img": {
      width: "100px",
    },
  },
  Liporow: {
    padding: "0 0px 0px 34px",
    "&>div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
  },
  ab:{
    position:'absolute',
    left:'0',
    top:'0',
    "& img":{
        width:'63px',
        transform:' rotate(-82deg)',
    }

  }
});

const Transformations = () => {
  const classes = usestyles();
  return (
    <Box className={classes.transformations}>
      <Box className="container">
        <Box className={classes.row}>
          <Box>
            <Box className={classes.col}>
              <img src="./img/after.jpg" alt="a" />
            </Box>
          </Box>
          <Box>
            <Box className={classes.col1}>
              <Box className={classes.after}>
                <Link href="">
                  <span>BEFORE / AFTER</span>
                </Link>
              </Box>
              <Box className={classes.after}>
                <Typography variant="h3">Transformations</Typography>
              </Box>
              <Box className={classes.Lipo}>
                <Box className={classes.Lipoflex}>
                  <img src="./img/pls-12.jpg" alt="aa" />
                  <Box className={classes.Liporow}>
                    <Box>
                      <Typography variant="h4">Liposuction</Typography>
                      <Typography variant="h4">$ 1200</Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
                        quisque
                      </Typography>
                      <span>NEW</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.Lipo}>
                <Box className={classes.Lipoflex}>
                  <img src="./img/pls-11.jpg" alt="aa" />
                  <Box className={classes.Liporow}>
                    <Box>
                      <Typography variant="h4">Breast Reduction</Typography>
                      <Typography variant="h4">$ 1900</Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Vivamus non lacus vel tellus molestie dictum. Morbi
                        malesuada nibh vel
                      </Typography>
                      <span>NEW</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.transformations} style={{ padding: "0" }}>
              <Box style={{ padding: "40px 50px 40px 50px", position:'relative' }}>
                <Box className={classes.ab}>
                  <img src="./img/badge.png" alt="aa" />
                </Box>
                <Box className={classes.Lipo} style={{ margin: "0" }}>
                  <Box className={classes.Lipoflex}>
                    <img src="./img/pls-13.jpg" alt="aa" />
                    <Box className={classes.Liporow}>
                      <Box>
                        <Typography variant="h4">Injections Fillers</Typography>
                        <Typography variant="h4">$ 99</Typography>
                      </Box>
                      <Box>
                        <Typography>
                          Curabitur scelerisque odio elementu maauris varius
                          dictum maecenas faci
                        </Typography>
                        <span>NEW</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Transformations;
