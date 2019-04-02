import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

const rootEl = document.getElementById("root");

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept("./components/App/App", () => {
    const NextApp = require("./components/App/App").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}

serviceWorker.unregister();
