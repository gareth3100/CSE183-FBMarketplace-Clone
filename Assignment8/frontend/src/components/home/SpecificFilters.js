import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {WorkspaceContext} from '../App';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  specificCategory: {
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  specificCategories: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: '92.3vh',
    width: '100%',
    zIndex: '2',
    backgroundColor: 'white',
  },
  specificCategoryAppbar: {
    marginTop: '15%',
    backgroundColor: 'white',
    color: 'black',
  },
  barWord: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    fontSize: '18px',
  },
}));
/**
 * App bar of our home page
 * @return {object} app bar
 */
function SpecificFilters() {
  const classes = useStyles();

  const {specificFilterS} = React.useContext(WorkspaceContext);
  const [, openSpecificFilter] = specificFilterS;

  const {currentCategories} = React.useContext(WorkspaceContext);
  const currentCategory = currentCategories[0];

  const item = localStorage.getItem('user');
  if (!item) {
    return null;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  const getSpecificFilter = () => {
    fetch('/v0/specificFilter', {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      }),
    })
    .then((json) => {
      console.log(json);
      setCurrentListing(json);
    })
    .catch((err) => {
      console.log(err);
      alert('Specific Listing Password/User is incorrect, please try again');
    });
  };
  return (
    <div className={classes.specificCategory}>
      <div id="paper" className={classes.specificCategories}>
        <AppBar className={classes.specificCategoryAppbar} position="fixed">
          <Toolbar>
            <Typography className={classes.barWord}
              variant="h6" noWrap component="div">
              Filter
            </Typography>
            <button
              variant="button"
              aria-label="close mobile reader"
              style={{
                position: 'absolute',
                backgroundColor: '#CECECE',
                fontSize: '20px',
                right: 10,
                top: 10,
                border: 0,
                borderRadius: '15px',
              }}
              onClick={() => openSpecificFilter(false)}
            > X
              {console.log(currentCategory)}
              {/* {console.log(specificFilter)} */}
            </button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            '& > :not(style)': {
              width: '100%',
              height: '92vh',
              border: 1,
              display: 'inline-block',
            },
          }}
        >
          <Paper>
            <Typography>
            </Typography>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default SpecificFilters;
