import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const usestyle = makeStyles({
  footer: {
    width: "100%",
    float: "left",
    backgroundImage: "url(./img/pr-02.jpg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: " multiply",
    padding: "100px 0px 80px 0px",
    backgroundColor: " #65BDC2",
  },
  col: {
    width: "100%",
    padding: "0 10px",
    textAlign: "initial",
    color: "#fff",
    "& h2": {
      color: " #FFFFFF",
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "1em",
      letterSpacing: "1px",
      fontFamily: "'DM Sans', sans-serif",
      marginBottom: "40px",
    },
  },
  logo: {
    width: "72%",
    marginBottom: "20px",
  },
  con: {
    "& p": {
      color: " #FFFFFF",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "2em",
      letterSpacing: "1px",
      fontFamily: "'DM Sans', sans-serif",
      padding: "10px 0",
    },
  },
  icon: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    color: "#fff",
  },
  dr1: {
    display: "flex",
    width: "100%",
    color: "#fff",

    "& >div": {
      marginRight: "27px",
      "& p": {
        color: "#fff",
        fontFamily: "DM Sans, Sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "2em",
        letterSpacing: "1px",
      },
    },
  },
  phone: {
    "& ul": {
      "& li": {
        padding: "0",
        fontFamily: "'DM Sans', sans-serif",
        "&>div": {
          minWidth: "40px",
        },
        "& svg": {
          width: "20px",
        },
        "& span": {
          fontSize: "14px",
          lineHeight: "2em",
          letterSpacing: "1px",
        },
      },
    },
  },
});

const Footer = () => {
  const classes = usestyle();
  return (
    <Box className={classes.footer}>
      <Box className="container">
        <Box className={classes.row}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Box className={classes.col}>
                <Box className={classes.logo}>
                  <img src="./img/logo-clinica-2.jpg" alt="aa" />
                </Box>
                <Box className={classes.con}>
                  <Typography>
                    Suspendisse commodo bibendum purus at hendrerit. Vivamus
                    aliquam bibendum.
                  </Typography>
                </Box>
                <Box className={classes.icon}>
                  <span>
                    <FacebookOutlinedIcon />
                  </span>
                  <span>
                    <TwitterIcon />
                  </span>
                  <span>
                    <YouTubeIcon />
                  </span>
                  <span>
                    <InstagramIcon />
                  </span>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.col}>
                <Typography variant="h2">Our Customers</Typography>
                <Box className={classes.con}>
                  <Typography>
                    Quisque in lorem ut arcu pretium aliquet praesent.
                  </Typography>
                </Box>
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
                    <Typography>John Doe</Typography>
                    <span>Designer</span>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.col}>
                <Typography variant="h2">Our Customers</Typography>
                <Box className={classes.phone}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      //   bgcolor: "background.paper",
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <CallIcon />
                      </ListItemAvatar>
                      <ListItemText primary="Phone : +36 4365390" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <MailIcon />
                      </ListItemAvatar>
                      <ListItemText primary="Email : clinic@surgery.co" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <HomeIcon />
                      </ListItemAvatar>
                      <ListItemText primary="Address : Main St, 1234" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <PublicIcon />
                      </ListItemAvatar>
                      <ListItemText primary="Country : United States" />
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.col}>
                <Typography variant="h2">Our Customers</Typography>
                <Box>
                  <ImageList
                    // sx={{ width: 500, height: 450 }}
                    cols={3}
                    // rowHeight={164}
                    gap={20}
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const itemData = [
    {
      img: './img/pls-04.jpg',
      title: 'Breakfast',
    },
    {
        img: './img/pls-05.jpg',
        title: 'Breakfast',
      },
      {
        img: './img/pls-06.jpg',
        title: 'Breakfast',
      },
      {
        img: './img/pls-07.jpg',
        title: 'Breakfast',
      },
      {
        img: './img/pls-26.jpg',
        title: 'Breakfast',
      },
      {
        img: './img/pls-27.jpg',
        title: 'Breakfast',
      },
     
    
  ];
