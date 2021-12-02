import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import MultiStep from './SignUp/Layout';
import MultiStep2 from './SignUpMaterialUI/Layout';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <BrowserRouter>
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
        <Route path="/MultiStep">
          <MultiStep/>
        </Route>
        <Route path="/MultiStep2">
          <MultiStep2/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
