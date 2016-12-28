import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

export default class Header extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={cx('root', className)}>
        <div className={cx('inner')}>
          <span>
            Credentials:
            &nbsp;
            <code>foo@example.com</code>
            &nbsp;/&nbsp;
            <code>barbaz</code>
          </span>
          <span>
            Source:
            &nbsp;
            <a
              href="https://github.com/pwlmaciejewski/react-code-sample"
              target="_blank"
              rel="noopener noreferrer"
            >
              pwlmaciejewski/react-code-sample
            </a>
          </span>
        </div>
      </div>
    );
  }
}
