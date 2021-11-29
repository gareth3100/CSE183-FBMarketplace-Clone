import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import SignIn from './SignIn';


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
        </Route>
        <Route path="/login">
          <SignIn/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
