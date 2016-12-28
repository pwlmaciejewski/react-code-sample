import { Component } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import classNames from 'classnames/bind';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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
    const { pending } = this.props;
    const { email, password } = this.state;
    return (
      <div className={ cx('root') }>
        <AppBar
          title="Sign up"
          showMenuIconButton={ null }
        />
        <Paper className={ cx('content') }>
          <form onSubmit={ this.onSubmit }>
            <TextField
              disabled={ pending }
              className={ cx('field') }
              type={ 'email' }
              floatingLabelText={ 'E-mail' }
              value={ email }
              onChange={ this.onEmailChange }
              floatingLabelFixed
              autoFocus
            />
            <TextField
              disabled={ pending }
              className={ cx('field') }
              type={ 'password' }
              value={ password }
              onChange={ this.onPasswordChange }
              floatingLabelText={ 'Password' }
              floatingLabelFixed
            />
            <div className={ cx('actions-wrapper') }>
              <RaisedButton
                label={ pending ? 'Please wait...' : 'Login' }
                disabled={ pending }
                type={ 'submit' }
                primary
              />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
