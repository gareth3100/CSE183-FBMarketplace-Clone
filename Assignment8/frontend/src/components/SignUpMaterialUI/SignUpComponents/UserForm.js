import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

/**
 * Simple component with no state.
 * @return {object} JSX
 */
export class UserForm extends Component {
  /**
 *
 * @param {string} props the selected element to evaluate
 */
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: '',
    };
    // Proceed to next step
    this.continues = (e) => {
      e.preventDefault();
      const {step} = this.state; // eslint-disable-line no-eval
      this.setState({ // eslint-disable-line no-eval
        step: step + 1,
      });
    };

    // Go back to prev step
    this.back = (e) => {
      e.preventDefault();
      const {step} = this.state;// eslint-disable-line no-eval
      this.setState({// eslint-disable-line no-eval
        step: step - 1,
      });
    };

    // Handle fields change
    this.handleChange = (input) => (e) => {
      this.setState({[input]: e.target.value});// eslint-disable-line no-eval
    };
  }


  /**
 * Simple component with no state.
 * @return {object} JSX
 */
  render() {
    const {step} = this.state;
    const {firstName, lastName, email, occupation, city, bio} = this.state;
    const values = {firstName, lastName, email, occupation, city, bio};

    switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          continues={this.continues}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          back={this.back}
          continues={this.continues}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          back={this.back}
          continues={this.continues}
        />
      );
    case 4:
      return <Success />;
    }
  }
}

export default UserForm;
