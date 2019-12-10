import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Land from "./web2.jpeg";

import Typed from "react-typed";

class MyComponent extends React.Component {
  render() {
    return (
      <div class="typewriter">
        <Typed
          strings={[
            "We are developers",
            "We are designers",
            "We change future"
          ]}
          typeSpeed={90}
          loop
        />
      </div>
    );
  }
}

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <img src={Land} alt="Langing Page" class="landing_image" />
        <div class="content">
          <MyComponent />
          <div class="github">
            <a href="https://github.com/fossgect" class="anchor_git">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
