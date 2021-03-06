import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Application from 'application';
import store from 'data/store';

render(
	<Provider store={ store }>
		<Application />
	</Provider>,
	document.getElementById( 'app' )
);