import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

export default class Header extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={ cx('root', className) }>
        <div className={ cx('inner') }>
          All rights reserved.
        </div>
      </div>
    );
  }
}
