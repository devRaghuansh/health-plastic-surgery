import { Box, Typography, Link, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  medea: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "url(./img/pr-32.jpg), #ffffffcc",
    backgroundPosition: "0px -219px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundBlendMode: "color",
    padding: "105px 0px 105px 0px",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
  },
  coll: {
    width: "100%",
    "& a": {
      background: "linear-gradient(90deg, #65BDC2 0%, #0E3055 100%)",
      color: " #FFFFFF",
      padding: " 5px 10px 5px 10px",
      fontSize: "11px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "4px",
      fontFamily: "'DM Sans', sans-serif",
      textDecoration: "none",
      marginBottom: "20px",
      display: "inline-block",
    },
    "& h2": {
      color: " #2E2E2E",
      fontSize: "50px",
      fontWeight: "normal",
      lineHeight: "1em",
      letterSpacing: "1px",
      fontFamily: "'DM Sans', sans-serif",
      marginBottom: "45px",
    },
  },
  call_1: {
    width: "100%",
    float: "left",
    display: "flex",
  },
  img: {
    width: "50%",
  },
  content: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px",
    textAlign: "initial",
    "& span": {
      fontSize: "12px",
      letterSpacing: "3px",
      fontFamily: "'DM Sans', sans-serif",
      lineHeight: "2em",
      fontWeight: "normal",
      marginBottom: "20px",
    },
    "& h3": {
      fontSize: "22px",
      letterSpacing: "2px",
      fontFamily: "'DM Sans', sans-serif",
      lineHeight: "1.2em",
      fontWeight: "normal",
      marginBottom: "20px",
    },
    "& p": {
      fontSize: "14px",
      letterSpacing: "1px",
      fontFamily: "'DM Sans', sans-serif",
      lineHeight: "2em",
      fontWeight: "normal",
      marginBottom: "20px",
    },
    "& a": {
      backgroundColor: "#0e3055",
      fontFamily: "'DM Sans', sans-serif",
      marginTop: "10px",
      width: '70%',
      color: '#fff',
      padding: '10px 20px',
      letterSpacing:' 2px',
      fontWeight: 'bold',
      lineHeight: '1em',
      fontSize: '12px',
      textDecoration: 'none',
    },
  },
});

const Meida = () => {
  const classes = usestyles();
  return (
    <Box className={classes.medea}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.coll}>
            <Link href="#">THE BLOG</Link>
            <Typography variant="h2">Check Our News</Typography>
          </Box>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box
                  className={classes.call_1}
                  style={{ color: "#fff", background: "#65bdc2" }}
                >
                  <Box className={classes.img}>
                    <img src="./img/post-01.jpg" alt="aa" />
                  </Box>
                  <Box className={classes.content}>
                    <span>8 SEP - STANDARD</span>
                    <Typography variant="h3">New Services</Typography>
                    <Typography>
                      Phasellus enim librobland vel sapien vitae, condime ntum
                      ul tricies magnaetq uisque eu ismod orci.
                    </Typography>
                    <Link href="#">READ MORE</Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.call_1}>
                  <Box className={classes.img}>
                    <img src="./img/post-02.jpg" alt="aa" />
                  </Box>
                  <Box className={classes.content}>
                    <span>8 SEP - STANDARD</span>
                    <Typography variant="h3">New Services</Typography>
                    <Typography>
                      Phasellus enim librobland vel sapien vitae, condime ntum
                      ul tricies magnaetq uisque eu ismod orci.
                    </Typography>
                    <Link href="#">READ MORE</Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.call_1}>
                  <Box className={classes.img}>
                    <img src="./img/post-01 (1).jpg" alt="aa" />
                  </Box>
                  <Box className={classes.content}>
                    <span>8 SEP - STANDARD</span>
                    <Typography variant="h3">New Services</Typography>
                    <Typography>
                      Phasellus enim librobland vel sapien vitae, condime ntum
                      ul tricies magnaetq uisque eu ismod orci.
                    </Typography>
                    <Link href="#">READ MORE</Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.call_1}>
                  <Box className={classes.img}>
                    <img src="./img/post-01 (1).jpg" alt="aa" />
                  </Box>
                  <Box className={classes.content}>
                    <span>8 SEP - STANDARD</span>
                    <Typography variant="h3">New Services</Typography>
                    <Typography>
                      Phasellus enim librobland vel sapien vitae, condime ntum
                      ul tricies magnaetq uisque eu ismod orci.
                    </Typography>
                    <Link href="#">READ MORE</Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Meida;
