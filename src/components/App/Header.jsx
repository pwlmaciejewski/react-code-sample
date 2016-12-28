import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

export default class Header extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={cx('root', className)}>
        <h1 className={cx('logo')}>React Code Sample</h1>
      </div>
    );
  }
}
