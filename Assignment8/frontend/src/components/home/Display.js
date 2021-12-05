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
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles({
  listingImage: {
    paddingRight: '10px',
    width: '100%',
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
  const [comment, setComment] = React.useState({comment: ''});
  const [open, setOpen] = React.useState(false);
  const [Listing, setListData] = React.useState([]);
  const [Replies, setReplyData] = React.useState([]);
  const classes = useStyles();
  const item = localStorage.getItem('user');
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const c = comment;
    c[name] = value;
    setComment(c);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    getListing();
    getReplies(); // eslint-disable-next-line
  }, []); 


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/authenticate', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
      })
      .catch((err) => {
        console.log(err);
        alert('Password/User is incorrect, please try again');
      });
  };


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
            reply: item.reply,
            person: item.info.firstname + ' ' +
            item.info.lastname,
          };
          const emptyObj = {
            reply: '',
            person: '',
          };
          if (item.reply) {
            List.push(obj);
          } else {
            List.push(emptyObj);
          };
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
  if (Listing.List === undefined || Replies.List === undefined) {
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
          <DialogContent style={{overflow: 'hidden'}}>
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
                  <b>Price</b>: ${item.price}
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <b>Location</b>: {item.location}
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                  <b>Description</b>: {item.description}
                </ListItem>
                <Divider variant="middle" component="li" />
                <Typography component="h1" variant="h6" sx={{marginTop: 5}}>
                      Comments:
                </Typography>
                <ListItem>
                  <List sx={{width: '100%', maxWidth:
                   360, bgcolor: 'background.paper'}}>
                    <React.Fragment>
                      {y.map((item) => (
                        <Typography sx={{marginTop: 1}}
                          variant="overline"
                          display="block">
                          <div style={{
                            border: '2px solid black',
                            borderRadius: 5,
                            marginTop: 2,
                            paddingLeft: '10px',
                            overflowWrap: 'break-word',
                            backgroundColor: '#E8E8E8'}}>
                            <b>{item.person}</b>
                            <div style={{
                              paddingRight: '10px',
                              fontSize: 10}}>
                              {item.reply} &nbsp;
                            </div>
                          </div>
                        </Typography>
                      ))}
                    </React.Fragment>.
                    <Divider variant="inset" component="li" />
                  </List>
                </ListItem>
              </List>
              <Box
                component="form"
                onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="reply"
                  label="Add a reply!"
                  type="reply"
                  id="reply"
                  onChange={handleInputChange}
                  autoComplete="reply"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{mt: 3, mb: 2}}
                >
              Reply
                </Button>
              </Box>
            </div>
          </DialogContent >
        </Dialog>
      ))}
    </div>
  );
}
