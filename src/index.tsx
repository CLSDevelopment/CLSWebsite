import { useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { configureStore } from "./store";

import { useLocation } from "react-router-dom";
import { RouteSwitcher } from "components/RouterSwitcher/RouteSwitcher";
import { createHistory,LocationProvider }from "@reach/router";
import ReactGA from "react-ga";

import "./i18n";
import "./index.scss";



const hist = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Router history={hist}>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Switch>
      <RouteSwitcher path="/" />
    </Switch>
  </Router>
,

  document.getElementById("root"),
);


