import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button, TextField } from "@mui/material";
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
  },
  container: {
    width: "80%",
    margin: "auto",
  },
  row: {
    width: "100%",
    float: "left",
    clear: "both",
    position: "relative",
    left: 0,
    top: "160px",
  },
  col: {
    textAlign: "initial",
    "& span": {
      background: "#0e3055",
      color: "#fff",
      padding: "5px 10px",
      textTransform: "uppercase",
      fontSize: "10px",
    },
    "& h2": {
      color: "#fff",
      fontSize: "4rem",
      fontWeight: "600",
      textTransform: "capitalize",
    },
  },
  content: {
    "& Button": {
      background: "none",
      border: "none",
    },
  },
  col1:{
    background:' #6ec1e485',
    display: 'flex',
    "& div":{
        width:'50%'
    }
  }
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Banner}>
      <Box className={classes.container}>
        <Box className={classes.row}>
          <Box className={classes.col}>
            <span>plastic surgery</span>
            <Typography variant="h1" gutterBottom>
              this is the <br></br>best clinic
            </Typography>
            <Box className={classes.content}>
              <Box>
                <Button variant="text">
                  shope <ArrowForwardIosIcon />
                </Button>
              </Box>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.col1}>
            <Box>
              <Typography>Get in Touch</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                non nunc eros. Suspendisse scelerisque felis.
              </Typography>
            </Box>
            <Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>
          </Box>
          </Box>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
