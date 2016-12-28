import { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './SignIn.scss';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const cx = classNames.bind(styles);

export default class SignIn extends Component {
  render() {
    return (
      <div className={ cx('root') }>
        <AppBar
          title="Sign up"
          showMenuIconButton={ null }
        />
        <Paper className={ cx('content') }>
          <form>
            <TextField
              className={ cx('field') }
              type={ 'email' }
              floatingLabelText={ 'Login' }
              floatingLabelFixed
              autoFocus
            />
            <TextField
              className={ cx('field') }
              type={ 'password' }
              floatingLabelText={ 'Password' }
              floatingLabelFixed
            />
            <div className={ cx('actions-wrapper') }>
              <RaisedButton
                primary
                label={ 'Login' }
              />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
