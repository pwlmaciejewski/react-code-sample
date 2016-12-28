import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Layout.scss';
import Header from './Header';
import Footer from './Footer';

const cx = classNames.bind(styles);

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={ cx('root') }>
        <Header className={ cx('header') } />
        <div className={ cx('content-wrapper') }>
          <div className={ cx('content') } >
            { children }
          </div>
        </div>
        <Footer className={ cx('footer') } />
      </div>
    );
  }
}
