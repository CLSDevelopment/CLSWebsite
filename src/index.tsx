import ReactDOM from "react-dom";
import { Router, Switch } from "react-router-dom";
import { configureStore } from "./store";
import ReactGA from "react-ga";
import { RouteSwitcher } from "components/RouterSwitcher/RouteSwitcher";
import { createHistory, LocationProvider } from "@reach/router";

import "./i18n";
import "./index.scss";

const store = configureStore();

ReactGA.initialize("G-SC3JZRM40X");
const history = createHistory(window);

history.listen((window) => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log("page=>", window.location.pathname);
});

ReactDOM.render(
  <LocationProvider history={history}>
    <Router>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Switch>
        <RouteSwitcher path="/" />
      </Switch>
    </Router>
  </LocationProvider>,
  document.getElementById("root")
);
