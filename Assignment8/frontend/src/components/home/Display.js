import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {makeStyles} from '@material-ui/core';


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
 * Simple component with no state.
 * @param {string} props the selected element to evaluate
 * @return {object} JSX
 */
export default function EmailReader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open Email
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
            <Typography sx={{ml: 2, flex: 1}} variant='h6' component='div'>
              {props.content.subject}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            From: {props.content.from.name} ({props.content.from.email})
          </ListItem>
          <ListItem>
            To: {props.content.to.name} ({props.content.to.email})
          </ListItem>
          <ListItem>
            Subject: {props.content.subject}
          </ListItem>
          <ListItem>
            Recieved:{props.content.received}
          </ListItem>
          <ListItem>
            Message: {props.content.content}
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
