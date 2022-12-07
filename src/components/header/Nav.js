import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

const useStyles = makeStyles({
    row:{
        width:'100%',
        float:'left',
        clear:'both'
    },
  item:{
    margin: '0 10px !important',
    position: 'relative !important',
    padding: '30px 20px !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    fontSize:' 14px !important',
    textTransform: 'uppercase',
    letterSpacing: '2px !important',
    fontFamily: "Lato,sans-serif !important",
    fontWeight: '600 !important',
    color:'#4a4351 !important',
    "&.active": {
      color:'#f0c05a',
    },
  }
});

const pages = ['HOME', 'ABOUT US', 'SHOP', 'PAGES', 'BLOG', 'CONTACT',];
const Navbar = () => {
  const classes = useStyles()
  return (
    <Box className={classes.row}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {pages.map((page) => (
          <Link
          href="/"
          underline="none"
          focusVisible
            key={page}
            className={classes.item}
            
          >
            {page}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default Navbar;