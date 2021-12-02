import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SpecificFilters from './SpecificFilters';
// import axios from 'axios';

import {WorkspaceContext} from '../App';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  today: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '15px',
    marginLeft: '5%',
    textAlign: 'left',
  },
  area: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    fontWeight: 'normal',
    position: 'absolute',
    marginBottom: '10px',
    float: 'right',
    color: '#0C91CE',
    border: '0px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: '15px',
    right: '13%',
  },
  areaCategoryOn: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginLeft: '5%',
    border: '0px',
  },
  filterCategoryOn: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginLeft: '10px',
    border: '0px',
  },
  distance: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    fontWeight: 'normal',
    position: 'absolute',
    right: '10px',
    marginBottom: '10px',
    float: 'right',
    color: '#0C91CE',
    border: '0px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: '15px',
  },
  listings: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginLeft: '5%',
  },
  listingImage: {
    paddingBottom: '15px',
    paddingRight: '10px',
  },
  listingPrice: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
  listingTitle: {
    paddingTop: '5px',
  },
  listingLocation: {
    paddingTop: '20px',
  },
}));

/**
 * Represents the home page of our app.
 * @return {object} the the home page
 */
function Listings() {
  const {openLocationS} = React.useContext(WorkspaceContext);
  const [, setOpenLocation] = openLocationS;
  const {currentCategories} = React.useContext(WorkspaceContext);
  const [currentCategory] = currentCategories;

  const {specificFilterS} = React.useContext(WorkspaceContext);
  const [specificFilter, openSpecificFilter] = specificFilterS;

  const classes = useStyles();
  const itemData = [];
  const item = localStorage.getItem('user');
  if (!item) {
    return;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  fetch('/v0/Listing', {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((json) => {
      json.forEach((item) =>{
        itemData.push(item.content);
      });
      console.log(itemData[0]);
    })
    .catch((err) => {
      console.log(err);
      alert('Password/User is incorrect, please try again');
    });
  return (
    <div>
      {!currentCategory? (
        <p className={classes.today}>
          Today's picks
          <button className={classes.area}
            onClick={() => setOpenLocation(true)}>
            Santa Cruz &#xb7;
          </button>
          <button className={classes.distance}>
            40 mi
          </button>
        </p> ) :
        (<div>
          <button className={classes.areaCategoryOn}
            onClick={() => setOpenLocation(true)}>
              Santa Cruz &#xb7; 40 mi
          </button>
          <button className={classes.filterCategoryOn}
            onClick={() => openSpecificFilter(true)}>
            Filters
          </button>
          {specificFilter? <SpecificFilters/> : <div/>} :
        </div>)
      }
      {/* https://mui.com/components/image-list/ */}
      <ImageList className={classes.listings}
        sx={{width: 325, height: 450}} cols={2} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <p className={classes.listingPrice}>{item.price}</p>
            <span className={classes.listingTitle}>
              {item.title}
            </span>
            <span className={classes.listingLocation}>{item.Location}</span>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Listings;
