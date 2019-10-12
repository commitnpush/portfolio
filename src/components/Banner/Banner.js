import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const cx = classNames.bind(styles);

class Banner extends Component {
  render() {
    return (
      <section
        id="Banner"
        className={cx('Banner')}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/image/banner.jpg)`
        }}
      >
        <main>
          <ReactCSSTransitionGroup
            transitionName={{
              appear: styles.appear,
              appearActive: styles.appearActive
            }}
            transitionEnter={false}
            transitionLeave={false}
            transitionAppear={true}
            transitionAppearTimeout={1000}
          >
            <span key="0" className={cx('title')}>
              Portfolio
            </span>
          </ReactCSSTransitionGroup>
        </main>
        <footer>
          <div className={cx('continue')}>CONTINUE</div>
          <div className={cx('vertical-bar')}>
            <div className={cx('triangle')} />
          </div>
        </footer>
      </section>
    );
  }
}

Banner.propTypes = {};
Banner.defaultProps = {};
export default Banner;
