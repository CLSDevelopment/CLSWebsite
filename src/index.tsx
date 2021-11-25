import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { configureStore } from "./store";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
import { RouteSwitcher } from "components/RouterSwitcher/RouteSwitcher";

import "./i18n";
import "./index.scss";

const TRACKING_ID = "G-SC3JZRM40X"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
  </Router>,

  document.getElementById("root")
);

export const history = hist;

const RouteChangeTracker = ({ hist }) => {
  hist.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return
};

export default withRouter(RouteChangeTracker);
