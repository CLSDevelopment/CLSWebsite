import { useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { configureStore } from "./store";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { RouteSwitcher } from "components/RouterSwitcher/RouteSwitcher";

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
     <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SC3JZRM40X"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SC3JZRM40X');
              `,
            }}
          />
    <Switch>
      <RouteSwitcher path="/" />
    </Switch>
  </Router>
,

  document.getElementById("root"),
);


