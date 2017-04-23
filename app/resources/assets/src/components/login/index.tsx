import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Login} from './login';
import allReducers from '../../reducers/';

const store = createStore(allReducers);
ReactDom.render(
	<Provider store={store}>
		<Login/>
	</Provider>,
	document.getElementById('app')
);
