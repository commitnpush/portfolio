import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Intro.module.scss';
const cx = classNames.bind(styles);

class Intro extends Component {
  render() {
    return (
      <section id="Intro" className={cx('Intro')}>
        <div className={cx('header')}>
          <div className={cx('vertical-bar')} />
          <div className={cx('title-container')}>
            <header>
              <div className={cx('title')}>Welcome</div>
              <div className={cx('subtitle')}>I'm DONG HYEOK</div>
            </header>
          </div>
        </div>
        <div className={cx('main')}>
          <div className={cx('greeting')}>
            <div className={cx('row')}>안녕하세요</div>
            <div className={cx('row', 'end')}>
              프론트엔드 개발자로 지원하는 장동혁입니다
            </div>
            <div className={cx('row')} />
            <div className={cx('row')}>새로운 기술에 열린 마음을 가진,</div>
            <div className={cx('row', 'end')}>
              성장에 대한 열정이 가득한 개발팀을 찾고 있습니다
            </div>
            <div className={cx('row')}>
              아래는 제가 회사에서 혹은 개인적으로 진행한 프로젝트입니다
            </div>
            <div className={cx('row')}>관심있게 지켜봐주세요. 감사합니다!</div>
          </div>
        </div>
        <footer />
      </section>
    );
  }
}

Intro.propTypes = {};
Intro.defaultProps = {};
export default Intro;
