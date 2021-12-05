import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import {createContext} from 'react';

export const WorkspaceContext = createContext();
/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [currentSubCategory, setSubCurrentCategory] = React.useState('');
  const [categoriesData, setCategoriesData] = React.useState('');
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [specificFilter, openSpecificFilter] = React.useState(false);
  const [authorize, setAuthorization] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [currentListing, setCurrentListing] = React.useState('');
  const [itemData, setItemData] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [radius, setRadius] = React.useState('');
  const [priceDescend, selectPriceDescend] = React.useState(false);
  const [priceAscend, selectPriceAscend] = React.useState(false);
  const [locationData, setLocationData] = React.useState(
    {location: 'Santa Cruz, CA', radius: '40'});

  useEffect(()=>{
    setCurrentListing();
  }, []);

  return (
    <BrowserRouter>
      <WorkspaceContext.Provider
        value={{
          currentCategories: [currentCategory, setCurrentCategory],
          openLocationS: [openLocation, setOpenLocation],
          loggedInS: [loggedIn, setLoggedIn],
          openFilterS: [openFilter, setOpenFilter],
          specificFilterS: [specificFilter, openSpecificFilter],
          authorizationToken: [authorize, setAuthorization],
          categoriesDataS: [categoriesData, setCategoriesData],
          currentSubCategoryS: [currentSubCategory, setSubCurrentCategory],
          searchS: [search, setSearch],
          currentListingS: [currentListing, setCurrentListing],
          itemDataS: [itemData, setItemData],
          locationS: [location, setLocation],
          radiusS: [radius, setRadius],
          priceDescendS: [priceDescend, selectPriceDescend],
          priceAscendS: [priceAscend, selectPriceAscend],
          locationDataS: [locationData, setLocationData],
        }}
      >
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </WorkspaceContext.Provider>
    </BrowserRouter>
  );
}

export default App;
