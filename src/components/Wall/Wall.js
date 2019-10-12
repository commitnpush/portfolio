import React from 'react';
import classNames from 'classnames/bind';
import styles from './Wall.module.scss';

const cx = classNames.bind(styles);

export default function Wall(props) {
  return (
    <section className={cx('Wall')}>
      <div className={cx('menu-container')}>
        <div
          className={cx('menu')}
          onClick={() => {
            props.onClick('Banner');
          }}
        >
          Home
        </div>
        <div
          className={cx('menu')}
          onClick={() => {
            props.onClick('Intro');
          }}
        >
          Welcome
        </div>
        <div
          className={cx('menu')}
          onClick={() => {
            props.onClick('Skills');
          }}
        >
          Skills
        </div>
        <div
          className={cx('menu')}
          onClick={() => {
            props.onClick('Career');
          }}
        >
          Carrier
        </div>
        <div
          className={cx('menu')}
          onClick={() => {
            props.onClick('Personal Project');
          }}
        >
          Project
        </div>
      </div>
    </section>
  );
}
