import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
const cx = classNames.bind(styles);

class Skills extends Component {
  render() {
    return (
      <section id="Skills" className={cx("Skills")}>
        <div className={cx("header")}>
          <div className={cx("vertical-bar", "white")} />
          <div className={cx("title-container")}>
            <header>
              <div className={cx("title", "text-white")}>Skills</div>
              <div className={cx("subtitle", "text-white")}>What i can</div>
            </header>
          </div>
        </div>
        <div className={cx("main")}>
          <div className={cx("skill-container")}>
            <div className={cx("skills-title")}>
              Client Side
              <hr />
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>Library & Framework</div>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue.JS</li>
                <li>Bootstrap</li>
                <li>MaterializeCSS</li>
                <li>JQuery</li>
              </ul>
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>Javascript</div>
              <ul>
                <li>ES6 & ES7</li>
                <li>TypeScript</li>
                <li>AJAX</li>
                <li>Regular Expression</li>
              </ul>
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>CSS</div>
              <ul>
                <li>CSS3</li>
                <li>SCSS</li>
                <li>Responsive Layout</li>
              </ul>
            </div>
          </div>
          <div className={cx("skill-container")}>
            <div className={cx("skills-title")}>
              Server Side
              <hr />
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>Library & Framework</div>
              <ul>
                <li>ExpressJS</li>
                <li>NextJS</li>
                <li>Spring Framework</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>Database</div>
              <ul>
                <li>Mysql</li>
                <li>MongoDB</li>
                <li>Oracle</li>
              </ul>
            </div>
          </div>
          <div className={cx("skill-container")}>
            <div className={cx("skills-title")}>
              ETC
              <hr />
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>AWS</div>
              <ul>
                <li>EC2</li>
                <li>S3</li>
                <li>RDS</li>
              </ul>
            </div>
            <div className={cx("skill")}>
              <div className={cx("title")}>VCS</div>
              <ul>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {};
Skills.defaultProps = {};
export default Skills;
