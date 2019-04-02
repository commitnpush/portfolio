import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
const cx = classNames.bind(styles);

class Intro extends Component {
  render() {
    return (
      <section id="Intro" className={cx("Intro")}>
        <div className={cx("header")}>
          <div className={cx("vertical-bar")} />
          <div className={cx("title-container")}>
            <header>
              <div className={cx("title")}>Welcome</div>
              <div className={cx("subtitle")}>I'm DONG HYEOK</div>
            </header>
          </div>
        </div>
        <div className={cx("main")}>
          <div className={cx("greeting")}>
            <div className={cx("row")}>안녕하세요</div>
            <div className={cx("row", "end")}>
              끊임없는 배움속에서 성장해 가는 것이 삶의 목표인 장동혁입니다
            </div>
            <div className={cx("row")} />
            <div className={cx("row")}>
              2016년부터 웹 프로그래밍 강사로 활동해 왔으며,
            </div>
            <div className={cx("row")}>
              2018년부터 JS기반 프론트엔드 프레임워크에 흥미를 느껴 개인적으로
              공부해 오다가
            </div>
            <div className={cx("row")}>현재는 프론트엔드 개발자로서</div>
            <div className={cx("row", "end")}>
              새로운 커리어 도약의 기회를 찾고있습니다
            </div>
            <div className={cx("row")}>새로운 기술을 공부하는 것을 즐기며</div>
            <div className={cx("row", "end")}>
              팀워크를 통해 성장하는 것을 좋아합니다
            </div>
            <div className={cx("row")}>
              제가 진행한 아래의 프로젝트를 관심있게 지켜봐주세요 !
            </div>
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
