import React from 'react';
import {createContext} from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Name from './SignUp/Name';
import Phone from './SignUp/Phone';
import Email from './SignUp/Email';
import Password from './SignUp/Password';
// https://reactjs.org/docs/context.html#reactcreatecontext
export const SignUpContext = createContext();

/**
 * @return {object} JSX
 */
function SignUp() {
  const [activeComp, setActiveComp] = React.useState('Name');
  const [user, setUser] = React.useState({firstName: '',
    lastName: '', email: '', phone: '', password: ''});
  return (
    <div>
      <SignUpContext.Provider
        value={{
          value: [activeComp, setActiveComp],
          userS: [user, setUser],
        }}
      >
        <Box sx={{display: 'flex', position: 'relative'}}>
          {activeComp === 'Name' ? (
            <Name/>
          ) : activeComp === 'Phone' ? (
            <Phone/>
          ) : activeComp === 'Email' ? (
            <Email/>
          ) : activeComp === 'Password' ? (
            <Password/>
          ) : null}
        </Box>
      </SignUpContext.Provider>
    </div>
  );
}

export default SignUp;
