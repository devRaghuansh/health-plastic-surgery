import { Box, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  product: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "url(./img/pr-32.jpg), #ffffffcc",
    backgroundPosition: "0px -219px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundBlendMode: "color",
    padding: '105px 0px 105px 0px',
  },
  row: {
    width: "100%",
  },
  call: {
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
  call_row: {
    width: "100%",
    position: "relative",
    "& span": {
      backgroundColor: "#65BDC2",
      padding: "5px 10px",
      fontFamily: "DM Sans, Sans-serif",
      fontSize: "13px",
      fontWeight: "normal",
      lineHeight: "13px",
      letterSpacing: "1px",
      color: "#fff",
      position: "absolute",
      top: "30px",
      right: "30px",
    },
  },
  btn: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    left: "0",
    bottom: " 0",
    "& a": {
      background: "none",
      lineHeight: "1em",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#2E2E2E !important",
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  call_con:{
    background:'url(./img/pls-41.jpg)',
    height: '100%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',

    "& >div":{
        display: 'flex',
    flexDirection: 'column',
    alignIems: 'center',
    width: '100%',
    gap: '21px',
    "& h3":{
        color:' #FFFFFF',
    fontFamily: "DM Sans, Sans-serif",
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '1em',
    letterSpacing: '1px',
    },
    "& p":{
        color:' #FFFFFF',
    fontFamily: "DM Sans, Sans-serif",
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '1em',
    letterSpacing: '1px',
    }
    }
  }
});

const Product = () => {
  const classes = usestyles();
  return (
    <Box className={classes.product}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.call}>
            <Link href="">SHOP NOW</Link>
            <Typography variant="h2">Find your Products</Typography>
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Box className={classes.call_row}>
                    <span style={{ background: "#0e3055" }}>$ 19</span>
                    <Box>
                      <img src="./img/shopc-02-600x600.jpg" alt="a" />
                    </Box>
                    <Box className={classes.btn}>
                      <Link href="#">SOAP</Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.call_row}>
                    <span style={{ background: "#0e3055" }}>$ 19</span>
                    <Box>
                    <img src="./img/shopc-05-600x600.jpg" alt="a" />
                    </Box>
                    <Box className={classes.btn}>
                      <Link href="#">SERUM</Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.call_con}>
                    <Box>
                      <Typography variant="h3">SHOP INFO</Typography>
                      <Typography>Terms and Conditions</Typography>
                      <Typography>Services and Returns</Typography>
                      <Typography>Solidarity Gifts</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.call_row}>
                    <span style={{ background: "#0e3055" }}>$ 19</span>
                    <Box>
                    <img src="./img/shopc-01.jpg" alt="a" />
                    </Box>
                    <Box className={classes.btn}>
                      <Link href="#">SERUM</Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.call_row}>
                    <span style={{ background: "#0e3055" }}>$ 19</span>
                    <Box>
                    <img src="./img/shopc-04.jpg" alt="a" />
                    </Box>
                    <Box className={classes.btn}>
                      <Link href="#">SERUM</Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.call_row}>
                    <span style={{ background: "#0e3055" }}>$ 19</span>
                    <Box>
                    <img src="./img/shopc-03.jpg" alt="a" />
                    </Box>
                    <Box className={classes.btn}>
                      <Link href="#">SERUM</Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
