import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, Switch, browserHistory  } from 'react-router-dom';
import { Provider } from 'react-redux';
import Application from 'application';
import Pricing from 'application/pricing';
import Confirmation from 'application/confirmation';
import store from 'data/store';

render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Application>
				<Route path="/" exact={ true } component={ Pricing }/>
				<Route path="/confirmation" component={ Confirmation }/>
			</Application>
	    </Router>
	</Provider>,
	document.getElementById( 'app' )
);