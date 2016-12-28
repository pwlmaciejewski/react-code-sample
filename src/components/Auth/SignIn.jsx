import { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        Sign in
        <TextField
          floatingLabelText="Login"
        />
      </div>
    );
  }
}
