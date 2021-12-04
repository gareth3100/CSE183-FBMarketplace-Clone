import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import {WorkspaceContext} from '../App';


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
    left: '20%', // not sure why 80% wouldn't work on mobile
  },
  typography: {
    fontSize: '25px',
    color: '#2196F3',
    fontWeight: 'bold',
  },
}));


/**
 * App bar of our home page
 * @return {object} app bar
 */
function HomeBar() {
  const {loggedInS} = React.useContext(WorkspaceContext);
  const [loggedIn] = loggedInS;
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    const path = `/login`;
    history.push(path);
  };

  const loginButton = <Button variant='contained' className={classes.login}
    onClick={routeChange}>
  Log in
  </Button>;
  return (
    <div>
      <CssBaseline />
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.typography} variant='h1' noWrap>
            FaceBook Clone
          </Typography>
          {loggedIn? <div></div>:loginButton}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeBar;
