import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { configureStore } from './store';
import ReactGA from 'react-ga';

import { RouteSwitcher } from 'components/RouterSwitcher/RouteSwitcher';

import './i18n';
import './index.scss';
;
const trackingId = "G-SC3JZRM40X"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const hist = createBrowserHistory();
const store = configureStore();

// hist.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

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
  
  document.getElementById('root')
);
ReactGA.initialize("G-SC3JZRM40X");
ReactGA.pageview(window.location.pathname + window.location.search);
export const history = hist;
