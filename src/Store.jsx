import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import PropTypes from 'prop-types';
import logger from './utils/logger';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

// middleware
const reduxDevTools =
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

let store;
if (window.navigator.userAgent.includes('Chrome')) {
	store = createStore(
		rootReducer,
		compose(
			applyMiddleware(logger, sagaMiddleware), reduxDevTools
		),
	);
} else {
	store = createStore(
		rootReducer,
		applyMiddleware(logger, sagaMiddleware),
	);
}

sagaMiddleware.run(rootSaga);

const Store = ({children}) => (
	<Provider store={store}>
		{children}
	</Provider>
);

Store.propTypes = {
	children: PropTypes.element.isRequired
};

export default Store;
