import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {WorkspaceContext} from '../App';

const url = require('url');
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
  apply: {
    backgroundColor: '#BFDCF9',
    padding: '7px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'absolute',
    fontSize: '18px',
    left: 10,
    top: 10,
    border: 0,
    borderRadius: '10px',
  },
  filters: {
    marginLeft: '5%',
    paddingTop: '30%',
    color: 'black',
    fontWeight: 'bold',
  },
  to: {
    position: 'absolute',
    left: '46%',
    top: '37.2%',
    fontWeight: 'normal',
  },
  min: {
    position: 'absolute',
    left: '5%',
    top: '33.2%',
    fontWeight: 'normal',
  },
  max: {
    position: 'absolute',
    left: '52%',
    top: '33.2%',
    fontWeight: 'normal',
  },
  radioHead: {
    position: 'absolute',
    top: '13.2%',
    right: '3%',
  },
  price: {
    position: 'absolute',
    top: '31.2%',
    left: '5%',
  },
  sort: {
    position: 'absolute',
    top: '13.2%',
    left: '5%',
  },
  year: {
    position: 'absolute',
    top: '46.2%',
    left: '5%',
  },
  yearMin: {
    position: 'absolute',
    left: '5%',
    top: '48.2%',
    fontWeight: 'normal',
  },
  yearTo: {
    position: 'absolute',
    left: '46%',
    top: '52.2%',
    fontWeight: 'normal',
  },
  yearMax: {
    position: 'absolute',
    left: '52%',
    top: '48.2%',
    fontWeight: 'normal',
  },
  mileage: {
    position: 'absolute',
    top: '61.2%',
    left: '5%',
  },
  mileageMin: {
    position: 'absolute',
    left: '5%',
    top: '63.2%',
    fontWeight: 'normal',
  },
  mileageTo: {
    position: 'absolute',
    left: '46%',
    top: '67.2%',
    fontWeight: 'normal',
  },
  mileageMax: {
    position: 'absolute',
    left: '52%',
    top: '63.2%',
    fontWeight: 'normal',
  },
  transmission: {
    position: 'absolute',
    top: '78.2%',
    left: '5%',
  },
  transmissionRadioHead: {
    position: 'absolute',
    top: '78.5%',
    right: '6%',
  },
}));
/**
 * App bar of our home page
 * @return {object} app bar
 */
function SpecificFilters() {
  const classes = useStyles();
  const {specificFilterS} = React.useContext(WorkspaceContext);
  const [specificFilter, openSpecificFilter] = specificFilterS;

  const {currentCategories} = React.useContext(WorkspaceContext);
  const currentCategory = currentCategories[0];

  const {itemDataS} = React.useContext(WorkspaceContext);
  const [itemData, setItemData] = itemDataS;

  const {currentSubCategoryS} = React.useContext(WorkspaceContext);
  const [currentSubCategory] = currentSubCategoryS;

  const {priceDescendS} = React.useContext(WorkspaceContext);
  const [, selectPriceDescend] = priceDescendS;

  const {priceAscendS} = React.useContext(WorkspaceContext);
  const [, selectPriceAscend] = priceAscendS;

  console.log(currentSubCategory);

  const specificFilterContainer = (
    category, currentSubCategory, minPrice, maxPrice,
  ) => {
    let data;
    if (currentSubCategory) {
      if (minPrice === undefined && maxPrice === undefined) {
        data = {
          category: category.toString(),
          subCategory: currentSubCategory.toString(),
        };
      } else if (minPrice && maxPrice === undefined) {
        data = {
          category: category.toString(),
          subCategory: currentSubCategory.toString(),
          minPrice,
        };
      } else if (minPrice === undefined && maxPrice) {
        data = {
          category: category.toString(),
          subCategory: currentSubCategory.toString(),
          maxPrice,
        };
      } else {
        data = {
          category: category.toString(),
          subCategory: currentSubCategory.toString(),
          minPrice,
          maxPrice,
        };
      }
    } else {
      if (minPrice === undefined && maxPrice === undefined) {
        data = {
          category: category.toString(),
        };
      } else if (minPrice && maxPrice === undefined) {
        data = {
          category: category.toString(),
          minPrice,
        };
      } else if (minPrice === undefined && maxPrice) {
        data = {
          category: category.toString(),
          maxPrice,
        };
      } else {
        data = {
          category: category.toString(),
          minPrice,
          maxPrice,
        };
      }
    }

    const item = localStorage.getItem('user');
    const user = JSON.parse(item);
    const bearerToken = user ? user.accessToken : '';

    const searchQuery = url.format({query: data});
    console.log(searchQuery);
    fetch('/v0/specificFilter' + searchQuery, {
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
        console.log(json);
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
        alert('Specific filter input is incorrect. Please try again');
      });
  };

  const x = itemData.Listings;
  console.log(x);

  let inputMin = 0;
  const setInputMin = (evt) => {
    inputMin = evt.target.value; // this is how u save user input
  };

  let inputMax = 0;
  const setInputMax = (evt) => {
    inputMax = evt.target.value; // this is how u save user input
  };


  const onClickApply = () => {
    specificFilterContainer(
      currentCategory,
      currentSubCategory,
      inputMin,
      inputMax,
    );
    openSpecificFilter(false);
  };

  const onRadioButtonLowest = () => {
    selectPriceAscend(true);
    selectPriceDescend(false);
  };

  const onRadioButtonHighest = () => {
    selectPriceAscend(false);
    selectPriceDescend(true);
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
              aria-label="apply"
              onClick={onClickApply}
              className={classes.apply}
            >
            Apply
            </button>
            <button
              variant="button"
              aria-label="close mobile reader"
              style={{
                position: 'absolute',
                backgroundColor: '#CECECE',
                fontSize: '20px',
                right: 10,
                top: 14,
                border: 0,
                borderRadius: '15px',
              }}
              onClick={() => openSpecificFilter(false)}
            > X
              {console.log(currentCategory)}
              {console.log(specificFilter)}
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
            <Typography className={classes.filters}>
              <div className={classes.sort}>Sort by</div>
              <div className={classes.radioHead}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Price</FormLabel>
                  <RadioGroup
                    aria-label="price"
                    defaultValue="lowest first"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="lowest"
                      control={<Radio />} label="Lowest first"
                      onClick={() => onRadioButtonLowest()}/>
                    <FormControlLabel value="highest"
                      control={<Radio />} label="Highest first"
                      onClick={() => onRadioButtonHighest()} />

                  </RadioGroup>
                </FormControl>
              </div>
              <div className={classes.price}>Price</div>
              <p className={classes.min}>
                <Stack
                  component="form"
                  sx={{
                    width: '16ch',
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder="Min"
                    onChange={setInputMin}
                  />
                </Stack>
              </p>
              <span className={classes.to}>to</span>
              <p className={classes.max}>
                <Stack
                  component="form"
                  sx={{
                    width: '17ch',
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder="Max"
                    onChange={setInputMax}
                  />
                </Stack>
              </p>
              <div className={classes.year}>Year</div>
              <p className={classes.yearMin}>
                <Stack
                  component="form"
                  sx={{
                    width: '16ch',
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder="Min"
                  />
                </Stack>
              </p>
              <span className={classes.yearTo}>to</span>
              <p className={classes.yearMax}>
                <Stack
                  component="form"
                  sx={{
                    width: '17ch',
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder="Max"
                  />
                </Stack>
              </p>
              <div className={classes.mileage}>Mileage</div>
              <p className={classes.mileageMin}>
                <Stack
                  component="form"
                  sx={{
                    width: '16ch',
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder="Min"
                  />
                </Stack>
              </p>
              <span className={classes.mileageTo}>to</span>
              <p className={classes.mileageMax}>
                <Stack
                  component="form"
                  sx={{
                    width: '17ch',
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder="Max"
                  />
                </Stack>
              </p>
              <div className={classes.transmission}>Transmission type</div>
              <div className={classes.transmissionRadioHead}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Type</FormLabel>
                  <RadioGroup
                    aria-label="price"
                    defaultValue="lowest first"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="manual"
                      control={<Radio />} label="Manual" />
                    <FormControlLabel value="automatic"
                      control={<Radio />} label="Automatic" />
                  </RadioGroup>
                </FormControl>
              </div>
            </Typography>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default SpecificFilters;
