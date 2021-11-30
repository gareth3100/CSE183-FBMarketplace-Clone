import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './Login';
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
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
