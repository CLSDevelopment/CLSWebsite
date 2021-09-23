import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { configureStore } from './store';

import { RouteSwitcher } from 'components/RouterSwitcher/RouteSwitcher';

import './i18n';
import './index.scss';
;

const hist = createBrowserHistory();
const store = configureStore();

hist.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  {/* Global site tag (gtag.js) - Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-SC3JZRM40X"
    />
    <script>{injectGA()}</script>
    <Router history={hist}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Switch>
        <RouteSwitcher path="/" />
      </Switch>
    </Router>,
  
  document.getElementById('root')
);
const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-SC3JZRM40X');
};
export const history = hist;
