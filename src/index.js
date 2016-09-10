'use strict';

import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Root from './components/root';

const store = createStore(
	combineReducers(reducers),
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('app')
);
