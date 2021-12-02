import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // Proceed to next step
  continues = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  back = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleChange={this.handleChange}
            values={values}
            continues={this.continues}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            handleChange={this.handleChange}
            values={values}
            back={this.back}
            continues={this.continues}
          />
        );
      case 3:
        return (
          <Confirm
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