import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import NumericInput from 'react-numeric-input';

import {WorkspaceContext} from '../Home';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  today: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '15px',
    marginLeft: '5%',
    textAlign: 'left',
  },
  area: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    fontWeight: 'normal',
    position: 'absolute',
    marginBottom: '10px',
    float: 'right',
    color: '#0C91CE',
    border: '0px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: '15px',
    right: '13%',
  },
  distance: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    fontWeight: 'normal',
    position: 'absolute',
    right: '10px',
    marginBottom: '10px',
    float: 'right',
    color: '#0C91CE',
    border: '0px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: '15px',
  },
}));

/**
 * Represents the home page of our app.
 * @return {object} the the home page
 */
function Listings() {
  const {openLocationS} = React.useContext(WorkspaceContext);
  const [, setOpenLocation] = openLocationS;
  const classes = useStyles();
  // https://stackoverflow.com/questions/45713362/how-to-render-images-with-react-js-using-map-or-loop
  //  const array = ["wood", "lake", "sun", "moon", "sea"];
  //  const images = array.map(image => {
  //   return <img key={image}
  //  src={require(`./icons/${image}.png`)} className="img-responsive" />
  // });
  return (
    <div>
      <p className={classes.today}>
        Today's picks
        <button className={classes.area} onClick={() => setOpenLocation(true)}>
          Santa Cruz &#xb7;
        </button>
        <button className={classes.distance}>
           40 mi
        </button>
      </p>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        {/* {images} */}
      </div>
    </div>
  );
};

export default Listings;
