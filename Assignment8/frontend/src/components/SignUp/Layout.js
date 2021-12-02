import React from 'react';
import MultiStep from 'react-multistep';
import Name from './Name';
import Email from './Email';
import Phone from './Phone';
import Password from './Password';


const steps = [
  {component: <Name />},
  {component: <Email />},
  {component: <Phone />},
  {component: <Password />},
];

// custom styles
const prevStyle = {background: '#33c3f0'};
const nextStyle = {background: '#33c3f0'};

/**
 * Simple component with no state.
 * @param {string} props the selected element to evaluate
 * @return {object} JSX
 */
export default function Layout() {
  return (
    <div className='container'>
      <MultiStep activeStep={0} steps={steps}
        prevStyle={prevStyle} nextStyle={nextStyle} />
      <div className='app-footer'>
        <h6>Press 'Enter' or click on progress bar for next step.</h6>
      </div>
    </div>
  );
}


