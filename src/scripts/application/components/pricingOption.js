import React from 'react';
import { connect } from 'react-redux';
import planConfigs from 'data/planConfigs';

import { changePlanType } from 'data/planActions';

@connect( ( store ) => {
	return {
		plan : store.plan
	}
} )
export default class PricingOption extends React.Component
{
	handleOnClick( _value )
	{
		console.log( _value );
		this.props.dispatch( changePlanType( _value ) );
	}

	render()
	{

		let { name, monthly, yearly, perMonthSpend } = this.props.config;

		let { plan } = this.props;

		console.log( plan );

		var priceValue = ( plan.timeline == "yearly" ) ? yearly : monthly;

		return(	
			<div className="pricing-option">
				<div className="pricing-option-label timeline-coloring d-flex justify-content-center align-items-center">{ name }</div>
				<div className="pricing-option-content d-flex flex-column align-items-center">
					<div className="pricing-option-amount">${ priceValue }</div>
					<div className="grey-text text-normal">per month</div>
					<div className="pricing-option-seperator"></div>
					<div className="pricing-option-per-month">Up to <strong>${ perMonthSpend }</strong> per month in advertising spend</div>
					<a href="/#/confirmation" className="btn-big mt-4" onClick={ () => this.handleOnClick( name ) }>Select Plan</a>
				</div>
			</div>
		);
	}
}