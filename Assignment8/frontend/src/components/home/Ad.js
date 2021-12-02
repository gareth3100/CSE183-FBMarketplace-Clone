import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

import {WorkspaceContext} from '../App';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1,
    position: 'fixed',
    backgroundColor: 'white',
  },
  // necessary for content to show below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  ad: {
    // backgroundColor: '#C3A5D2',
    backgroundColor: '#FFBBB2',
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
}));

/**
 * App bar of our home page
 * @return {object} app bar
 */
function Ad() {
  const {loggedInS} = React.useContext(WorkspaceContext);
  const [loggedIn] = loggedInS;
  const history = useHistory();

  const routeChange = () => {
    const path = `/login`;
    history.push(path);
  };
  const classes = useStyles();

  const adReturn = <div className={classes.content}>
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
      <button className={classes.adButton1} onClick={routeChange}>
            Log In
      </button>
      <button className={classes.adButton2}>
            Learn more
      </button>
    </div>
  </div>;


  return (loggedIn ? <div className={classes.ad}></div> : adReturn);
}

export default Ad;
