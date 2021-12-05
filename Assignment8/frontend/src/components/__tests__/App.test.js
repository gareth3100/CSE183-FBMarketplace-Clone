<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 3520a9a5280c1599a425c5b7894d731d098d7101
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {setupServer} from 'msw/node';
import {screen, waitFor} from '@testing-library/react';
import {rest} from 'msw';
<<<<<<< HEAD
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import routeData from 'react-router';

=======
import {Router, Route} from 'react-router-dom'
import {createMemoryHistory} from 'history';
import routeData from 'react-router';

import {WorkspaceContext} from '../App';
import Listings from '../home/Listings';

>>>>>>> 3520a9a5280c1599a425c5b7894d731d098d7101

import App from '../App';
import Home from '../Home';

/**
 */

const mockParams = {
  cat: null,
  subcat: null,
};

<<<<<<< HEAD
=======
let selected;
let showCategories;

let URL = '/v0/category'
const select = (category) => {
  selected = category;
}
const setShowCategories = (show_) => {
  showCategories = show;
};

const doRender = () => {
  render(
    <WorkspaceContext.Provider
      value={{select, showCategories, setShowCategories}}
    >
      <App />
    </WorkspaceContext.Provider>
  );
};

>>>>>>> 3520a9a5280c1599a425c5b7894d731d098d7101
// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks/59623136#59623136
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    companyId: 'company-id1',
    teamId: 'team-id1',
  }),
<<<<<<< HEAD
  useRouteMatch: () => ({url: '/company/company-id1/team/team-id1'}),
=======
  useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
>>>>>>> 3520a9a5280c1599a425c5b7894d731d098d7101
}));


const history = createMemoryHistory();
const TestRouter = ({ComponentWithRedirection, RedirectUrl}) => (
  <Router history={history}>
    <Route path='/' exact={true} render={() => <ComponentWithRedirection />} />
    <Route path={RedirectUrl} render={() => <div>{RedirectUrl}</div>} />
  </Router>
);

<<<<<<< HEAD
const URL = '/v0/';
=======
>>>>>>> 3520a9a5280c1599a425c5b7894d731d098d7101
const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json({message: 'Frontend Test'}));
  }),
);

beforeAll(() => server.listen());
beforeEach(() => {
  jest.spyOn(routeData, 'useParams').mockReturnValue(mockParams);
});

afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());


test('App Renders', async () => {
<<<<<<< HEAD
  render(<App />);
  await waitFor(() => screen.getByText('FaceBook Clone'));
});

test('Click All Categories', async () => {
  render(<App/>);
  global.innerWidth = 360;
  global.innerHeight = 640;
  global.dispatchEvent(new Event('resize'));
  await waitFor(() => expect(screen.getByText('All Categories')).toBeInTheDocument());
  fireEvent.click(screen.getByText(`All Categories`));
});


test('Log in is selected', async () => {
  const redirectURL = '/login';
  render(
    <TestRouter
      ComponentWithRedirection={() => <App />}
      RedirectUrl={redirectURL}
    />,
  );
  global.innerWidth = 360;
  global.innerHeight = 640;
  global.dispatchEvent(new Event('resize'));
  fireEvent.click(screen.getByText('Log in'));
  await waitFor(() => screen.getByText('FaceBook Market Clone'));
  // expect(history.location.pathname).toEqual(redirectURL);
});

test('Create account', async () => {
  const redirectURL = '/login';
  render(
    <TestRouter
      ComponentWithRedirection={() => <App />}
      RedirectUrl={redirectURL}
    />,
  );
  global.innerWidth = 360;
  global.innerHeight = 640;
  global.dispatchEvent(new Event('resize'));
  await waitFor(() => screen.getByText('FaceBook Market Clone'));
  fireEvent.click(screen.getByText(`Don't have an account? Sign Up`));
  await waitFor(() => screen.getByText('FaceBook Market Clone SignUp'));

  // expect(screen.getByDisplayValue('First Name').id).toBe('the-id');
=======
  doRender();
  await waitFor(() => screen.getByText('FaceBook Clone'));
});

test("Click All Categories", async () => {
  doRender();
  global.innerWidth = 360;
  global.innerHeight = 640;
  global.dispatchEvent(new Event('resize'));
  waitFor(() => screen.getByText('All Categories'));
  fireEvent.click(screen.getByText(`All Categories`));

>>>>>>> 3520a9a5280c1599a425c5b7894d731d098d7101
});


test("Log in is selected", async () => {
  const redirectURL = '/login';
  render(
    <TestRouter
      ComponentWithRedirection={() => <App />}
      RedirectUrl={redirectURL}
    />,
  );
  global.innerWidth = 360;
  global.innerHeight = 640;
  global.dispatchEvent(new Event('resize'));
  fireEvent.click(screen.getByText('Log in'));
  await waitFor(() => screen.getByText('FaceBook Market Clone'));
  // expect(history.location.pathname).toEqual(redirectURL);
});

test("Create account", async () => {
  let redirectURL = '/login';
  render(
    <TestRouter
      ComponentWithRedirection={() => <App />}
      RedirectUrl={redirectURL}
    />,
  );
  global.innerWidth = 360;
  global.innerHeight = 640;
  global.dispatchEvent(new Event('resize'));
  await waitFor(() => screen.getByText('FaceBook Market Clone'));
  fireEvent.click(screen.getByText(`Don't have an account? Sign Up`));
  await waitFor(() => screen.getByText('FaceBook Market Clone SignUp'));
  const inputFName = screen.getByText('First Name');
});







// import {render, fireEvent} from '@testing-library/react';
// import '@testing-library/jest-dom';
// import {screen, waitFor} from '@testing-library/react';
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';

// import Dummy from '../Dummy';

// const URL = '/v0/';

// const server = setupServer(
//   rest.get(URL, (req, res, ctx) => {
//     return res(ctx.json({message: 'Hello CSE183'}));
//   }),
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// /**
//  */
// test('Button Clickable', async () => {
//   render(<Dummy />);
//   fireEvent.click(screen.getByText('Get Dummy'));
//   await waitFor(() => screen.getByText('Hello CSE183'));
// });

// /**
//  */
// test('Handles Server Error', async () => {
//   server.use(
//     rest.get(URL, (req, res, ctx) => {
//       return res(ctx.status(500));
//     }),
//   );
//   render(<Dummy />);
//   fireEvent.click(screen.getByText('Get Dummy'));
//   await waitFor(() => screen.getByText('ERROR: ', {exact: false}));
// });
