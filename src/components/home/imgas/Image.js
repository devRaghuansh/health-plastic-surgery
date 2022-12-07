import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
    Image:{
        width:'100%',
        float:'left',
        clear:'both',
        padding: '50px 0px 50px 0px',
        backgroundColor: '#FFFFFF',
    },
    col:{
        "& img":{
            width:'150px'
        }
    }
})

const Image = () => {
    const classes = usestyles();
  return (
    <Box className={classes.Image}>
      <Box className="container">
        <Box className="row">
          <Box className={classes.col}>
            <Grid container spacing={2}>
              <Grid item xs={2.4}>
                <img src="./img/pls-10.png" alt="a" />
              </Grid>
              <Grid item xs={2.4}>
                <img src="./img/pls-07.png" alt="a" />
              </Grid>
              <Grid item xs={2.4}>
                <img src="./img/pls-08.png" alt="a" />
              </Grid>
              <Grid item xs={2.4}>
                <img src="./img/pls-09.png" alt="a" />
              </Grid>
              <Grid item xs={2.4}>
                <img src="./img/pls-06.png" alt="a" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Image;
