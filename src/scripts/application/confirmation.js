import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

@connect( ( store ) => {
	return {
		plan : store.plan
	}
} )
export default class Confirmation extends React.Component
{

	render()
	{

		let { plan } = this.props;

		var message = ( plan.type !== undefined ) ? <SuccessMessage plan={ this.props.plan } /> : <FailureMessage />;

		return(
			<div className="container d-flex flex-column align-items-center my-5">
				{ message }
				<Link to="/">
					<button className="btn btn-big">Pricing Options</button>
				</Link>
			</div>
		);
	}
}

function SuccessMessage( _props )
{
	return(
		<div className="d-flex flex-column align-items-center">
			<h1>Thank you.</h1>
			<h3 className="mb-5">You have selected the { _props.plan.timeline } { _props.plan.type } plan.</h3>
			<p>Changed your mind? No worries.</p>
		</div>
	);
}

function FailureMessage()
{
	return(
		<div>
			<p className="mb-5">I'm sorry, but you have yet to select a payment plan.</p>
			<p>Please go to the pricing page to select a plan.</p>
		</div>
	);
}