import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./ProjectList.module.scss";
import { Project } from "components";
const cx = classNames.bind(styles);

export default function(props) {
  return (
    <section id="ProjectList" className={cx("ProjectList")}>
      <header className={cx("header")}>
        <div className={cx("vertical-bar")} />
        <div className={cx("title-container")}>
          <header>
            <div className={cx("title")}>Project</div>
            <div className={cx("subtitle")}>What i did</div>
          </header>
        </div>
      </header>
      <main className={cx("main")}>
        {props.projects.map((e, i) => (
          <Project key={e.title} index={i} {...e} />
        ))}
      </main>
      <div className={cx("tail")} />
    </section>
  );
}
