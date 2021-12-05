import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {setupServer} from 'msw/node';
import {screen, waitFor} from '@testing-library/react';
import {rest} from 'msw';
import {Router, Route} from 'react-router-dom'
import {createMemoryHistory} from 'history';
import routeData from 'react-router';



import App from '../App';
import Home from '../Home';

/**
 */
// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks/59623136#59623136
const mockParams = {
  cat: null,
  subcat: null,
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    companyId: 'company-id1',
    teamId: 'team-id1',
  }),
  useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
}));

const history = createMemoryHistory();
const TestRouter = ({ComponentWithRedirection, RedirectUrl}) => (
  <Router history={history}>
    <Route path='/' exact={true} render={() => <ComponentWithRedirection />} />
    <Route path={RedirectUrl} render={() => <div>{RedirectUrl}</div>} />
  </Router>
);

const URL = '/v0/dummy';
const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json({message: 'UI Test for Home Component'}));
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
  render(<App />);
  await waitFor(() => screen.getByText('FaceBook Clone'));
});


// test("Category is selected", async () => {
//   const redirectURL = '/login';
//   render(<);
// });



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
