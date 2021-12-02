import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import searchLogo from './resources/person.png';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import {WorkspaceContext} from '../App';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  category: {
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  categoryButton: {
    backgroundColor: '#EAEAEA',
    borderRadius: '20px',
    marginLeft: '5%',
    padding: '13px',
    fontWeight: 'bold',
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    marginRight: '-3%',
    cursor: 'pointer',
  },
  categorySearch: {
    padding: '12px',
    marginLeft: '3%',
  },
  categoryInput: {
    backgroundColor: '#EAEAEA',
    borderRadius: '18px',
    padding: '10px',
    width: '97%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
  iconButton: {
    backgroundColor: '#EAEAEA',
    borderRadius: '20px',
    marginLeft: '5%',
    padding: '11px',
    paddingBottom: '10px',
    paddingTop: '10px',
    fontWeight: 'bold',
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    marginRight: '-3%',
    cursor: 'pointer',
  },
  icon: {
    paddingTop: '0px',
    width: '15px',
    margin: 'auto',
    marginLeft: '2px',
    marginRight: '2px',
  },
  categoryList: {
    marginLeft: '5%',
    marginTop: '2%',
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '5px',
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  allCategories: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: '92.3vh',
    width: '100%',
    zIndex: '2',
    backgroundColor: 'white',
  },
  categoryAppbar: {
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
function Categories() {
  const [categories, openCategories] = useState(false);
  const {currentCategories, openLocationS} =
  React.useContext(WorkspaceContext);
  const [currentCategory, setCurrentCategory] = currentCategories;
  const [openLocation, setOpenLocation] = openLocationS;
  // const [currentCategoryData, setCurrentCategoryData] = currentCategoryDataS;
  const classes = useStyles();

  const itemData = [];
  const item = localStorage.getItem('user');
  if (!item) {
    return;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  fetch('/v0/category', {
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
      itemData.push(json);
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
      alert('Password/User is incorrect, please try again');
    });

  const category = [
    'Vehicles',
    'Property Rentals',
    'Apparel',
    'Classified',
    'Electronics',
    'Entertainment',
    'Family',
    'Free Stuff',
    'Garden & Outdoor',
    'Hobbies',
    'Home Goods',
    'Home Improvement Supplies',
    'Home Sales',
    'Musical Instruments',
    'Office Supplies',
    'Pet Supplies',
    'Sporting Goods',
    'Toys & Games',
    'Buy and sell groups',
  ];


  const onClick = (evt) => {
    setCurrentCategory(evt.target.name);
    openCategories(false);
    console.log(evt.target.name);
  };

  const withoutCategory = <div>
    <button className={classes.iconButton}>
      <img className={classes.icon} src={searchLogo} alt="person"/>
    </button>
    <button className={classes.categoryButton}>
      Sell
    </button> <button className={classes.categoryButton}
      onClick={() => (openCategories(true))}>
      All Categories
    </button>
  </div>;

  // const withCategoryTop = <div>
  //   <button className={classes.iconButton}>{currentCategory} </button>
  // </div>;
  const withCategory = <div>
    <Button size="small"
      onClick={() => setCurrentCategory('')}>
      Marketplace >
    </Button>
    <Button size="small">
      {currentCategory}
    </Button>
    <Divider variant="middle" />
    <Button size="large" color="secondary"
      onClick={() => openCategories(true)}>
      {currentCategory}
    </Button>
    {/* {subCategories} */}
  </div>;

  return (
    <div className={classes.category} >
      {(currentCategory === '') ? withoutCategory :
        withCategory}

      {/* https://www.emgoto.com/react-search-bar/ */}
      <form className={classes.categorySearch} action="/" method="get">
        <input
          type="text"
          id="header-search"
          placeholder="Search Marketplace"
          name="search"
          className={classes.categoryInput }
        />
      </form>

      {categories?
        <div id="paper" className={classes.allCategories}>
          <AppBar className={classes.categoryAppbar} position="fixed">
            <Toolbar>
              <Typography className={classes.barWord}
                variant="h6" noWrap component="div">
                Select Category
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
                onClick={() => openCategories(false)}
              > X
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
                {category.map(function(categoryName, index) {
                  return (
                    <button className={classes.categoryList} key={index}
                      onClick={onClick} name={categoryName}>
                      {categoryName}
                    </button>
                  );
                })}
              </Typography>
            </Paper>
          </Box>
        </div>:
        <div/>}

      {openLocation?
        <div id="paper" className={classes.allCategories}>
          <AppBar className={classes.categoryAppbar} position="fixed">
            <Toolbar>
              <Typography className={classes.barWord}
                variant="h6" noWrap component="div">
                Change location
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
                onClick={() => setOpenLocation(false)}
              > X
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
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={40}
                  label="Age"
                  // onChange={null}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Typography>
            </Paper>
          </Box>
        </div>:
        <div/>}
    </div>
  );
};

export default Categories;
