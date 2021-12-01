import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
