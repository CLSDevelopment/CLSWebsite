import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const configureStore = () => {
  const composeEnhancers =
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

  const middleware = [thunk];

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  );
};
