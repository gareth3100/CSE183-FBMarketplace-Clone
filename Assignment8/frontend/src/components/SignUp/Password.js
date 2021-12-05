import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useHistory} from 'react-router-dom';

import {SignUpContext} from '../SignUp';

const theme = createTheme();

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
export default function Phone() {
  const {value, userS} = React.useContext(SignUpContext);
  const [, setActiveComp] = value;
  const [user, setUser] = userS;

  const history = useHistory();

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const handleSubmit = (event) => {
    setActiveComp('');
    if (user.password === user.checkPassword) {
      const u = {firstName: user.firstName,
        lastName: user.lastName, email: user.email,
        phone: user.phone, password: user.password};
      setUser(u);
      console.log(user);
      event.preventDefault();
      fetch('/insertUser', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('User Created! You will not be directed to the login page');
      history.push('/login');
    } else {
      alert('Password and Password Confirmation did not match');
      setActiveComp('Name');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            FaceBook Market Clone SignUp
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Password"
              label="Password"
              name="password"
              autoComplete="Password"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="checkPassword"
              label="Password Confirmation"
              name="checkPassword"
              autoComplete="checkPassword"
              onChange={handleInputChange}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
            >
              Create New User
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
