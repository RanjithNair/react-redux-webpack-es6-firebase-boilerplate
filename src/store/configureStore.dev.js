import { applyMiddleware, compose } from 'redux';
import Reactotron from 'reactotron-react-js';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { browserHistory } from "react-router";
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return Reactotron.createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), routerMiddleware(browserHistory)),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
}
