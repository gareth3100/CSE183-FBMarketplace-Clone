import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import MultiStep from './SignUp/Layout';
import MultiStep2 from './SignUpMaterialUI/Layout';
import {createContext} from 'react';

export const WorkspaceContext = createContext();
/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <BrowserRouter>
      <WorkspaceContext.Provider
        value={{
          currentCategories: [currentCategory, setCurrentCategory],
          openLocationS: [openLocation, setOpenLocation],
          loggedInS: [loggedIn, setLoggedIn],
          openFilterS: [openFilter, setOpenFilter],
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
        <Route path="/MultiStep2">
          <MultiStep2/>
        </Route>
      </WorkspaceContext.Provider>
    </BrowserRouter>
  );
}

export default App;
