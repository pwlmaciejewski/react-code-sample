/* global window alert */

import { Component } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import classNames from 'classnames/bind';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ErrorMessage from '../UI/ErrorMessage';
import styles from './SignIn.scss';
import {
  requestSignIn,
  resetSignIn
} from '../../modules/auth';

const cx = classNames.bind(styles);

@connect(
  state => state.auth,
  ({
    requestSignIn,
    resetSignIn
  })
)
@autobind
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  componentWillMount() {
    this.props.resetSignIn();
  }
  componentWillReceiveProps(nextProps) {
    const { success } = this.props;
    if (!success && nextProps.success) {
      alert('Signed in successfully!');
      window.location = 'https://www.youtube.com/watch?v=Nf_Y4MbUCLY';
    }
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.requestSignIn(email, password);
  }
  render() {
    const { pending, error } = this.props;
    const { email, password } = this.state;
    return (
      <div className={cx('root')}>
        <AppBar
          title="Sign up"
          showMenuIconButton={null}
        />
        <Paper className={cx('content')}>
          <form onSubmit={this.onSubmit}>
            <ErrorMessage
              className={cx('error')}
              error={error}
              prefix={'auth/'}
              messages={{
                'invalid-email': 'Invalid email or password.',
                'invalid-passowrd': 'Invalid email or password.',
                'invalid-credentials': 'Invalid email or password.'
              }}
            />
            <TextField
              disabled={pending}
              className={cx('field')}
              type={'email'}
              floatingLabelText={'E-mail'}
              value={email}
              onChange={this.onEmailChange}
              floatingLabelFixed
              autoFocus
            />
            <TextField
              disabled={pending}
              className={cx('field')}
              type={'password'}
              value={password}
              onChange={this.onPasswordChange}
              floatingLabelText={'Password'}
              floatingLabelFixed
            />
            <div className={cx('actions-wrapper')}>
              <RaisedButton
                label={pending ? 'Please wait...' : 'Login'}
                disabled={pending}
                type={'submit'}
                primary
              />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
