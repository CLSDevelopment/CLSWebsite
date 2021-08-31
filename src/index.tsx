import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { configureStore } from './store';

import { RouteSwitcher } from 'components/RouterSwitcher/RouteSwitcher';

import './i18n';
import './index.scss';



const hist = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router history={hist}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Switch>
        <RouteSwitcher path="/" />
      </Switch>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

export const history = hist;

// serviceWorker.unregister();
