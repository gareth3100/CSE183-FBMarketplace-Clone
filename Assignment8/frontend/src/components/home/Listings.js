import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
  const classes = useStyles();

  // const getEvents = async (setCurrentEvents) => {
  //   await axios.get('http://localhost:3010/v0/listing/')
  //   .then((response) => {
  //       setCurrentEvents(response.data);
  //   })
  //   .catch(() => {
  //       console.log('Cannot get list');
  //   });
  // };

  const itemData = [
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638399746/maxresdefault_ou9lch.jpg',
      price: '200000',
      title: 'Expensive Car',
      category: 'Vehicles',
      description: 'car.',
      location: 'San Jose, CA',
    },
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638399743/most-expensive-new-cars-ever_pzflcz.webp',
      price: '50000',
      title: 'Medium Car',
      category: 'Vehicles',
      description: 'car.',
      location: 'Santa Cruz, CA',
    },
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638399743/most-expensive-new-cars-ever_pzflcz.webp',
      price: '50000',
      title: 'Medium Car',
      category: 'Vehicles',
      description: 'car.',
      location: 'Santa Cruz, CA',
    },
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638399744/elantra-1080p_fap19u.jpg',
      price: '20000',
      title: 'Elantra Car',
      category: 'Vehicles',
      description: 'car.',
      location: 'Santa Cruz, CA',
    },
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638401071/12d6b-cypress-copper-rim_0018_DSC_3498_fmc9tj.jpg',
      price: '15000',
      title: 'Expensive Home',
      category: 'Property Rentals',
      description: 'home.',
      location: 'San Jose, CA',
    },
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638401087/teresina-shea-1_rokfln.jpg',
      price: '15000',
      title: 'Medium Home',
      category: 'Property Rentals',
      description: 'home.',
      location: 'Santa Cruz, CA',
    },
    {
      img: 'https://res.cloudinary.com/dfjqgstje/image/upload/v1638401086/hot-homes.jpeg_qyjiuz.webp',
      price: '5000',
      title: 'Small Home',
      category: 'Property Rentals',
      description: 'home.',
      location: 'Santa Cruz, CA',
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
      {/* https://mui.com/components/image-list/ */}
      <ImageList className={classes.listings}
        sx={{width: 325, height: 450}} cols={2} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem className={classes.listingImage} key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <p className={classes.listingPrice}>{item.price}</p>
            <span className={classes.listingTitle}>
              {item.title}
            </span>
            <span className={classes.listingLocation}>{item.location}</span>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Listings;
