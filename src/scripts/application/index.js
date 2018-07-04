import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Pricing from './pricing';
import Confirmation from './confirmation';


export default class Application extends React.Component
{
	render()
	{
		return(
			<div>
				<Header/>
				
				<Router history={ browserHistory }>
					<div>	
						<Route path="/" exact component={ Pricing } />
						<Route path="/confirmation" component={ Confirmation } />
					</div>
				</Router>

				<Footer/>
			</div>
		);
	}
}