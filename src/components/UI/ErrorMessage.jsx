import { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import styles from './ErrorMessage.scss';

const cx = classNames.bind(styles);

export default class ErrorMessage extends Component {
  renderMessage() {
    const {
      error = {},
      prefix = '',
      messages = {},
      unknownErrorMessage = 'An unknown error occured. Please try again.'
    } = this.props;
    const prefixedMessages = _.mapKeys(messages, (val, key) => `${prefix}${key}`);
    const message = prefixedMessages[error.code];
    return (
      <span>{ message || unknownErrorMessage }</span>
    );
  }
  render() {
    const { error, className } = this.props;
    if (!error) return null;
    return (
      <div className={cx('root', className)}>
        <p>
          {this.renderMessage()}
        </p>
      </div>
    );
  }
}
