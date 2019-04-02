import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { Banner, Intro, Skills, ProjectList, Contacts, Wall } from "components";
import Loader from "react-loader-spinner";
import projects from "data/projects";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const cx = classNames.bind(styles);

class App extends Component {
  state = {
    loading: true,
    isBanner: true,
    showWall: false
  };

  _scrollHander = e => {
    if (window.innerHeight <= window.scrollY + 30) {
      if (this.state.isBanner) {
        this.setState({ isBanner: false });
      }
    } else {
      if (!this.state.isBanner) {
        this.setState({ isBanner: true });
      }
    }
  };
  _handleToggleShowWall = () => {
    this.setState(state => ({
      showWall: !state.showWall
    }));
  };
  _handleCloseShowWall = id => {
    const height = getOffsetTop(document.getElementById(id));
    window.scroll(0, height);

    this.setState({
      showWall: false
    });
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHander);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
    window.addEventListener("scroll", this._scrollHander);
  }
  render() {
    const loader = (
      <div className={cx("loading-spinner")}>
        <Loader type="Oval" color="white" height="50" width="50" />
      </div>
    );
    return this.state.loading ? (
      loader
    ) : (
      <div className={cx("App")}>
        <div
          id="menu"
          ref={ref => (this.menu = ref)}
          className={cx("menu", { black: !this.state.isBanner })}
          onClick={this._handleToggleShowWall}
        >
          <div className={cx("line-container")}>
            <div className={cx("vertical-line")} />
            <div className={cx("vertical-line")} />
            <div className={cx("vertical-line")} />
          </div>
        </div>

        <ReactCSSTransitionGroup
          transitionName="wall"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.showWall && <Wall onClick={this._handleCloseShowWall} />}
        </ReactCSSTransitionGroup>

        <Banner />
        <Intro />
        <Skills />
        <ProjectList projects={projects} />
        <Contacts />
      </div>
    );
  }
}

function getOffsetTop(el) {
  var top = 0;
  if (el.offsetParent) {
    do {
      top += el.offsetTop;
    } while ((el = el.offsetParent));
    return top;
  }
}

export default App;
