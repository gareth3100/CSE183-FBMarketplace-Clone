import React from 'react';
// import {useHistory} from 'react-router-dom';
import {createContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import HomeBar from './home/Homebar';
import Ad from './home/Ad';
import Categories from './home/Categories';
import Listings from './home/Listings';

export const WorkspaceContext = createContext();

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  hr: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    borderTop: '5px',
    borderColor: '#969393',
    marginTop: '-15px',
    marginLeft: '5%',
    marginRight: '3%',
  },
}));
/**
 * Represents the home page of our app.
 * @return {object} the the home page
 */
function Home() {
  const [currentCategory, setCurrentCategory] = React.useState('');
  const [openLocation, setOpenLocation] = React.useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WorkspaceContext.Provider
        value={{
          currentCategories: [currentCategory, setCurrentCategory],
          openLocationS: [openLocation, setOpenLocation],
        }}
      >
        <div>
          <HomeBar/>
          <Ad/>
          <Categories/>
          <hr className={classes.hr}/>
          <Listings/>
        </div>
      </WorkspaceContext.Provider>
    </div>
  );
}

export default Home;
