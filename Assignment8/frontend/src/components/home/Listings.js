import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SpecificFilters from './SpecificFilters';
import React, {useEffect, useState} from 'react';
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
import Display from './Display';

import {WorkspaceContext} from '../App';

const url = require('url');
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
  hr: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    borderTop: '5px',
    borderColor: '#969393',
    marginTop: '-15px',
    marginLeft: '5%',
    marginRight: '3%',
  },
  listingButton: {
    textAlign: 'left',
    border: '0px',
    backgroundColor: 'transparent',
    paddingBottom: '15px',
    cursor: 'pointer',
    height: 200,
  },
}));

/**
 * Represents the home page of our app.
 * @return {object} the the home page
 */
function Listings() {
  const {specificFilterS} = React.useContext(WorkspaceContext);
  const [specificFilter, openSpecificFilter] = specificFilterS;
  const [categories, openCategories] = useState(false);
  const {currentCategories, openLocationS, categoriesDataS,
    currentSubCategoryS, searchS} =
    React.useContext(WorkspaceContext);
  const [currentCategory, setCurrentCategory] = currentCategories;
  const [openLocation, setOpenLocation] = openLocationS;
  const [categoriesData, setCategoriesData] = categoriesDataS;
  const [currentSubCategory, setSubCurrentCategory] = currentSubCategoryS;
  const [search, setSearch] = searchS;
  const [itemData, setItemData] = React.useState([]);

  const classes = useStyles();
  const item = localStorage.getItem('user');

  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';

  const getCategories = () => {
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
        setCategoriesData(json);
        // console.log(json);
      })
      .catch((err) => {
        console.log(err);
        alert('Category Password/User is incorrect, please try again');
      });
  };

  useEffect(()=>{
    getListings();
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!item) {
    return;
  }

  const getListings = () => {
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
        const Listings = [];
        json.forEach((item) =>{
          const obj = {
            img: item.content.image,
            title: item.content.title,
            location: item.content.Location,
            price: item.content.price,
            description: 'example',
            id: item.id,
          };
          Listings.push(obj);
        });
        setItemData({Listings});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (itemData.Listings === undefined) {
    return 'Loading';
  }

  const getSearchedListing = (searched, category) => {
    let data;
    if (searched === '') {
      data = {category: category.toString()};
    } else if (category === '') {
      if (searched !== '') {
        data = {search: searched.toString()};
      } else {
        data = {};
      }
    } else {
      data = {category: category.toString(), search: searched.toString()};
    }
    let searchQuery = url.format({query: data});
    if (category === '' && searched === '') {
      searchQuery = '';
    }
    fetch('/v0/search' + searchQuery, {
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
        return res.json(200);
      })
      .then((json) => {
        const Listings = [];
        json.forEach((item) =>{
          const obj = {
            img: item.content.image,
            title: item.content.title,
            location: item.content.Location,
            price: item.content.price,
            description: 'example',
            id: item.id,
          };
          Listings.push(obj);
        });
        setItemData({Listings});
      })
      .catch((err) => {
        console.log(err);
        alert('Search Password/User is incorrect, please try again');
      });
  };

  const getSearchedSubListing = (searched, subCategory) => {
    let data;
    if (searched === '') {
      data = {subCategory: subCategory.toString()};
    } else if (subCategory === '') {
      data = {search: searched.toString()};
    } else {
      data = {subCategory: subCategory.toString(), search: searched.toString()};
    }
    const searchQuery = url.format({query: data});
    fetch('/v0/searchSub' + searchQuery, {
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
        return res.json(200);
      })
      .then((json) => {
        const Listings = [];
        json.forEach((item) =>{
          const obj = {
            img: item.content.image,
            title: item.content.title,
            location: item.content.Location,
            price: item.content.price,
            description: 'example',
          };
          Listings.push(obj);
        });
        setItemData({Listings});
      })
      .catch((err) => {
        console.log(err);
        alert('Search Sub Password/User is incorrect, please try again');
      });
  };

  const onChangeSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const onSubmitSearch = (evt) => {
    evt.preventDefault();
    if (currentSubCategory === '') {
      getSearchedListing(search, currentCategory);
    } else {
      getSearchedSubListing(search, currentSubCategory);
    }
  };

  const category = [
    'Vehicles',
    'Property Rentals',
    'Apparel',
    'Classifieds',
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
    setSubCurrentCategory('');
    openCategories(false);
    getSearchedListing(search, evt.target.name);
  };


  const onClickSubCategory = (evt) => {
    setSubCurrentCategory(evt.target.name);
    getSearchedSubListing(search, evt.target.name);
  };

  const onClickMarketplace = () => {
    setCurrentCategory('');
    setSubCurrentCategory('');
    getListings();
  };

  const onClickCategory = () => {
    setCurrentCategory(currentCategory);
    getSearchedListing(search, currentCategory);
    setSubCurrentCategory('');
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

  let currentCategoryData = '';
  let subCategoryButton = '';
  if (currentCategory !== '') {
    currentCategoryData = categoriesData.filter((category) =>
      category.name === currentCategory,
    );
    currentCategoryData = currentCategoryData[0];
    subCategoryButton = <div>
      {currentCategoryData.subcategories.map((subCategory, index) => {
        return (<button className={classes.iconButton} key={index}
          name={subCategory} onClick={onClickSubCategory}>
          {subCategory}
        </button>);
      })}
    </div>;
  }

  const withCategory = <div>
    <Button size="small"
      onClick={onClickMarketplace}>
      Marketplace {'>'}
    </Button>
    <Button size="small"
      onClick={onClickCategory}>
      {currentCategory}
    </Button>
    { (currentSubCategory !== '') ? <Button size="small">
      {'> ' + currentSubCategory}
    </Button> : <div/>}
    <Divider variant="middle" />
    { (currentSubCategory !== '') ? <Button size="large" color="secondary">
      {currentSubCategory}
    </Button> : <Button size="large" color="secondary"
      onClick={() => openCategories(true)}>
      {currentCategory}
    </Button>}

    {(currentSubCategory !== '') ? <div/> : <div> {subCategoryButton} </div>}
  </div>;

  const x = itemData.Listings;
  return (
    <div>
      <div className={classes.category} >
        {(currentCategory === '') ? withoutCategory :
          withCategory}

        {/* https://www.emgoto.com/react-search-bar/ */}
        <form className={classes.categorySearch} onSubmit={onSubmitSearch}>
          <input
            type="text"
            id="header-search"
            placeholder="Search Marketplace"
            name="search"
            onChange={onChangeSearch}
            className={classes.categoryInput}
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
      <hr className={classes.hr}/>
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
          {x.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}
                    ?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className = {classes.listingImage}
              />
              <p className={classes.listingPrice}>
                  ${item.price}
              </p>
              <span className={classes.listingTitle}>
                {item.title}
              </span>
              <span className={classes.listingLocation}>
                {item.location}
              </span>
              <Display id={item.id}/>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Listings;
