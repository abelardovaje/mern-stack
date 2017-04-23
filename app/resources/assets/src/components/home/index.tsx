import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import allReducers from '../../reducers/';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {Home} from './home';

const middleware = applyMiddleware(promise(),thunk)
const store = createStore(allReducers,middleware);

ReactDom.render(
	<Provider store={store}>
		<Home/>
	</Provider>	,
	document.getElementById('app')
);
