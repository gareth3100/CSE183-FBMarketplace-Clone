import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
  listingTitle: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
  listingDescription: {
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
  const classes = useStyles();

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      description: 'this is a breakfast',
      location: 'breakfast town',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      description: 'this is a burger',
      location: 'burger town',
    },
  ];

  return (
    <div>
      <p className={classes.today}>
        Today's picks
        <button className={classes.area} onClick={() => setOpenLocation(true)}>
          Santa Cruz &#xb7;
        </button>
        <button className={classes.distance}>
           40 mi
        </button>
      </p>
      <ImageList className={classes.listings}
        sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <p className={classes.listingTitle}>{item.title}</p>
            <span className={classes.listingDescription}>
              {item.description}
            </span>
            <span className={classes.listingLocation}>{item.location}</span>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Listings;
