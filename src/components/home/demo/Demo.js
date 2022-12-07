import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  demo: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "url(./img/pr-32.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "Cover",
    padding:' 84px 0',
    position:'relative',
    "& h5": {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "1em",
      fontFamily: "'DM Sans', sans-serif",
      color: "#2e2e2e",
      letterSpacing: "1px",
    },
  },
  background: {
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFFBF 100%)",
    opacity: "1",
    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    position: "absolute",
  },
  row: {
    "& p": {
      color: "#5C5C5C",
      lineHeight: "1em",
      letterSpacing: "4px",
      fontSize: "12px",
      fontWeight: "normal",
      fontFamily: "'DM Sans', sans-serif",
    },
  },
});

const Demo = () => {
  const classes = usestyles();
  return (
    <Box className={classes.demo}>
      <Box className={classes.background}></Box>
      <Box className="container">
        <Box className={classes.row}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Card  >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="/img/pls-04.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Breast Augmentation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      FROM 1299 $
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="/img/pls-05.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Phinoplasty
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      FROM 350 $
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="/img/pls-07.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Tummy Tuck Liposuction
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      FROM 2000 $
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="/img/pls-06.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Otoplasty Brow
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      FROM 150 $
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Demo;
