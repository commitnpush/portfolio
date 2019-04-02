import React from "react";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";
const cx = classNames.bind(styles);

export default function Contacts() {
  return (
    <section className={cx("Contacts")}>
      <div className={cx("title")}>
        <span>Contacts</span>
      </div>
      <div className={cx("contects")}>
        <div className={cx("contect")}>
          <span className={cx("key")}>
            <i className="fa fa-phone" />
          </span>
          <span className={cx("value")}>010 8245 5105</span>
        </div>
        <div className={cx("contect")}>
          <span className={cx("key")}>
            <i className="fa fa-envelope" />
          </span>
          <span className={cx("value")}>commitnpush@gmail.com</span>
        </div>
        <div className={cx("contect")}>
          <span className={cx("key")}>
            <i className="fab fa-github" />
          </span>
          <span className={cx("value")}>
            <a href="https://github.com/commitnpush">commitnpush</a>
          </span>
        </div>
      </div>
    </section>
  );
}
