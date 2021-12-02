import React from 'react';
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
  const [currentCategoryData, setCurrentCategoryData] = React.useState('');
  const [currentSubcategory, setCurrentSubcategory] = React.useState('');
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
<<<<<<< HEAD
  const [specificFilter, openSpecificFilter] = React.useState(false);
=======
  const [authorize, setAuthorization] = React.useState(false);
>>>>>>> 3b84ab58e40c705288e9fcb86b45b4ed391fec44

  return (
    <BrowserRouter>
      <WorkspaceContext.Provider
        value={{
          currentCategories: [currentCategory, setCurrentCategory],
          openLocationS: [openLocation, setOpenLocation],
          loggedInS: [loggedIn, setLoggedIn],
          openFilterS: [openFilter, setOpenFilter],
<<<<<<< HEAD
          specificFilterS: [specificFilter, openSpecificFilter],
=======
          authorizationToken: [authorize, setAuthorization],
>>>>>>> 3b84ab58e40c705288e9fcb86b45b4ed391fec44
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
