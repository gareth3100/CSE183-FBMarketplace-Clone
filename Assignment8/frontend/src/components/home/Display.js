import * as React from 'react';
import {useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {makeStyles} from '@material-ui/core';
import {ListItem} from '@mui/material';

// const url = require('url');
const useStyles = makeStyles({
  newPosOfDialog: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-40%, 50%)',
  },
});


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
/**
 * Represents the home page of our app.
 * @param {string} props ID of the listing
 * @return {object} the the home page
 */
export default function ListingReader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Listing, setListData] = React.useState([]);

  const item = localStorage.getItem('user');
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    getListing();
  }, []);

  const getListing = () => {
    fetch('/v0/display/' + props.id, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        const List = [];
        json.forEach((item) =>{
          const obj = {
            img: item.content.image,
            title: item.content.title,
            location: item.content.Location,
            price: item.content.price,
            description: 'example',
          };
          List.push(obj);
        });
        setListData({List});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (Listing.List === undefined) {
    return 'Loading';
  }
  const x = Listing.List;
  return (

    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        View Listing
      </Button>
      <Dialog
        classes={{
          paper: classes.newPosOfDialog,
        }}
        hideBackdrop
        disableAutoFocus
        disableEnforceFocus
        style={{pointerEvents: 'none'}}
        PaperProps={{style: {pointerEvents: 'auto'}}}
        fullWidth
        maxWidth={'xl'}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{position: 'relative'}}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {x.map((item) => (
          <List>
          <ListItem>
            Title: {item.title} ({item.title})
          </ListItem>
          <ListItem>
            Title: {item.title} ({item.title})
          </ListItem>
          <ListItem>
            Price: ${item.price}
          </ListItem>
          <ListItem>
            Location:{item.location}
          </ListItem>
          <ListItem>
            Description: {item.description}
          </ListItem>
          </List>
          ))}

      </Dialog>
    </div>
  );
}
