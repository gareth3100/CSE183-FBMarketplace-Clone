import React from 'react';
// import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 1,
    position: 'fixed',
    backgroundColor: 'white',
  },
  // necessary for content to show below app bar
  toolbar: theme.mixins.toolbar,
  login: {
    /* not optimal for really small windows or large window */
    position: 'absolute',
    left: '50%', // not sure why 80% wouldn't work on mobile
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  ad: {
    backgroundColor: '#C3A5D2',
    paddingTop: '20px',
    paddingBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  adButton1: {
    borderRadius: '8px',
    marginLeft: '5%',
    padding: '10px',
    backgroundColor: 'white',
    fontWeight: 'bold',
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    margin: '4px 2px',
    cursor: 'pointer',
  },
  adButton2: {
    borderRadius: '8px',
    marginLeft: '2%',
    padding: '10px',
    paddingLeft: '20%',
    paddingRight: '20%',
    backgroundColor: 'white',
    fontWeight: 'bold',
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    margin: '4px 2px',
    cursor: 'pointer',
  },
  adWords1: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginLeft: '5%',
    marginRight: '30%',
    lineHeight: '120%',
  },
  adWords2: {
    fontSize: '15px',
    marginLeft: '5%',
    marginRight: '30%',
  },
  typography: {
    fontSize: '25px',
    color: '#2196F3',
    fontWeight: 'bold',
  },
}));

/**
 * Represents the home page of our app.
 * @return {object} the the home page
 */
function Home() {
  const classes = useStyles();
  return (
    <div>
      {/* APPBAR */}
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.typography} variant='h1' noWrap>
              facebook
            </Typography>
            <Button variant='contained' className={classes.login}>
              Log in
            </Button>
          </Toolbar>
        </AppBar>

        {/* AD */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.ad}>
            <div className={classes.adWords1}>
              Buy and sell items locally or have something new shipped from
              stores.
            </div>
            <div className={classes.adWords2}>
              Log in to get the full Facebook Marketplace experience.
            </div>
            <br />
            <button className={classes.adButton1}>
              Log In
            </button>
            <button className={classes.adButton2}>
              Learn more
            </button>
          </div>
        </main>

        {/* CATEGORY SELECTION */}
      </div>
    </div>
  );
}

export default Home;
