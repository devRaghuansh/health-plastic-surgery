import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import PaymentIcon from '@mui/icons-material/Payment';

const usestyles = makeStyles({
  Promotions: {
    width: "100%",
    float: "left",
    background: "url(./img/pls-25.jpg), #1c1c1c7a",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "color",
    backgroundSize: "cover",
    padding: "90px 0px 90px 0px",
  },
  row: {
    width: "100%",
    float: "left",
    display:'flex',
    "&>div":{
        width:'50%',
    }
  },
  col:{
    textAlign: 'initial',
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    "&>p": {
        marginBottom: "20px",
        fontSize: "14px",
        lineHeight: "2em",
        letterSpacing: "1px",
      },
      "& span": {
        backgroundColor: "#65BDC2",
        padding: "5px 10px 5px 10px",
        fontFamily: "DM Sans, Sans-serif",
        fontSize: "10px",
        fontWeight: "normal",
        lineHeight: "1.6em",
        letterSpacing: "4px",
        color: "#fff",
        marginBottom: "20px",
        display:'inline-block',
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
  pay:{
    "& h6":{
        color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: '1em',
    letterSpacing: '1px',
    fontSize: '14px',
    },
    "&>div":{
        display:'flex',
        gap:'15px',
        marginTop:'10px',
        "& svg":{
            width:'1.8em',
            height:'1.8em',
            color:'#0c0a0a'
        }
    }
  },
  crl:{
    background:'linear-gradient(90deg, #65BDC2 0%, #0E3055 100%)',
    width:'300px',
    height:'300px',
    padding: '46px',
    borderRadius: '50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'DM Sans', sans-serif",
    color: '#fff',
  },
  col_1:{
    paddingLeft:'80px'
  },
  col_con:{
    position:'relative',
    display: 'flex',
    width: '100%',
    marginBottom: '111px',
  },
  crlimg:{
    width:'288px',
    position:'absolute',
    right:'0'
  }

});

const Promotions = () => {
  const classes = usestyles();

  return (
    <Box className={classes.Promotions}>
      <Box className="container">
        <Box className={classes.row}>
          <Box className={classes.col}>
            <span>DON'T LOSE</span>
            <Typography variant="h2">All Promotions !</Typography>
            <Typography>Suspendisse commodo bibendum purus at hendrerit. Vivamus aliquam bibendum fringilla. Praesent cursus felis nunc, quis vulputate sapien posuere vitae. Aliquam erat volutpat. Cras egestas porta massa eget pulvinar cras non enim et dui pharetra hendrerit mattis.</Typography>
            <Box className={classes.pay}>
                <Typography variant="h6">Payment Options :</Typography>
                <Box>
                    <Box><PaymentIcon/></Box>
                    <Box><PaymentIcon/></Box>
                    <Box><PaymentIcon/></Box>
                    <Box><PaymentIcon/></Box>
                </Box>
            </Box>
          </Box>
          <Box className={classes.col_1}>
            <Box className={classes.col_con}>
                <Box className={classes.crl}>
                    <Typography variant="h5">up to</Typography>
                    <Typography variant="h3">50%</Typography>
                    <Typography variant="h4">on selected items</Typography>
                </Box>
                <Box className={classes.crlimg}>
                    <img src="./img/pls-01.png" alt="s"  />
                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Promotions;
