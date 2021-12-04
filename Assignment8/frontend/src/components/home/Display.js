import * as React from 'react';
import {useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {makeStyles} from '@material-ui/core';
import {ListItem} from '@mui/material';
import DialogContent from '@material-ui/core/DialogContent';

// const url = require('url');
const useStyles = makeStyles({
  newPosOfDialog: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-40%, 50%)',
  },
  listingImage: {
    paddingRight: '10px',
    width: '100%',
  },
  root: {
    '&.MuiButton-root': {
      border: '2px black solid',
    },
    '&.MuiButton-text': {
      color: 'grey',
    },
    '&.MuiButton-contained': {
      color: 'yellow',
    },
    '&.MuiButton-outlined': {
      color: 'brown',
    },
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
  const [open, setOpen] = React.useState(false);
  const [Listing, setListData] = React.useState([]);
  const [Replies, setReplyData] = React.useState([]);
  const classes = useStyles();
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
    getReplies();
  }, []);

  const getReplies = () => {
    fetch('/v0/replies/' + props.id, {
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
            img: item.reply,
          };
          List.push(obj);
        });
        setReplyData({List});
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  if (Listing.List === undefined && Replies.List) {
    return 'Loading';
  }
  const y = Replies.List;
  const x = Listing.List;
  return (

    <div>
      <Button variant='outlined' onClick={handleClickOpen}
        sx={{
          border: 0,
          fontSize: '10px',
          marginTop: '7px',
          marginLeft: '-10%',
        }}
      >
        <div>View Listing</div>
      </Button>
      {x.map((item) => (
        <Dialog
          fullScreen={true}
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogContent>
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
                <Typography sx={{ml: 2, flex: 1}} variant='h6' component='div'>
                  {item.title}
                </Typography>
              </Toolbar>
            </AppBar>
            <div style={{marginTop: 80}}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}
                    ?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className = {classes.listingImage}
              />
              <List>
                <ListItem>
                    Price: ${item.price}
                </ListItem>
                <ListItem>
                    Location:{item.location}
                </ListItem>
                <ListItem>
                    Description: {item.description}
                </ListItem>
                <ListItem>
                  Replies:
                    <table>
                      <thead>
                        <tr>
                          <th>Person</th>
                          <th>Reply</th>
                        </tr>
                      </thead>
                      <tbody>
                      {y.map((item) => (
                        <td> item.reply </td>
                      ))}
                      </tbody>
                    </table>
                </ListItem>
              </List>
            </div>
          </DialogContent >
        </Dialog>
      ))}
    </div>
  );
}
