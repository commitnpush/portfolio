import React from 'react';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import ImageGallery from 'react-image-gallery';
const cx = classNames.bind(styles);

export default function Project(props) {
  const images = [];
  if (props.image) {
    for (let i = 0; i <= props.image.end; i++) {
      images.push({
        original: `/portfolio/image/${props.image.title}-${i}.png`,
        originalAlt: props.image.vertical >= i ? 'vertical' : ''
      });
    }
  }
  return (
    <article className={cx('Project')}>
      <div
        className={cx('project-container', { reverse: props.index % 2 === 1 })}
      >
        <div className={cx('example')}>
          <ImageGallery
            lazyLoad={true}
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            slideDuration={200}
          />
        </div>
        <div className={cx('info')}>
          <div className={cx('title')}>{props.title}</div>
          <ul className={cx('spec')}>
            {Object.keys(props.spec).map(key => (
              <li key={key} className={cx('item')}>
                <strong className={cx('key')}>{key}</strong>
                <span className={cx('value')}>{props.spec[key]}</span>
              </li>
            ))}
          </ul>
          <div className={cx('description')}>
            {props.descriptions.map((e, i) => (
              <div className={cx('row')} key={i}>
                {e}
              </div>
            ))}
          </div>
          <div className={cx('action')}>
            {props.demo && (
              <a
                href={props.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('btn')}
              >
                Demo
              </a>
            )}
            {props.repository && (
              <a
                href={props.repository}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('btn')}
              >
                Repository
              </a>
            )}
            {props.repository_client && (
              <a
                href={props.repository_client}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('btn')}
              >
                Repos (client)
              </a>
            )}
            {props.repository_server && (
              <a
                href={props.repository_server}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('btn')}
              >
                Repos (server)
              </a>
            )}
            {props.user_page && (
              <a
                href={props.user_page}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('btn')}
              >
                User page
              </a>
            )}
            {props.manager_page && (
              <a
                href={props.manager_page}
                target="_blank"
                rel="noopener noreferrer"
                className={cx('btn')}
              >
                Manager page
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
