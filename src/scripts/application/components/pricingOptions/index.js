import React from 'react';
import { connect } from 'react-redux';
import PricingOption from './pricingOption';

import planConfigs from 'data/planConfigs'

@connect( ( store ) => {
	return {
		plan : store.plan
	}
} )
export default class PricingOptions extends React.Component
{
	render()
	{

		var options = [];

		let { timeline } = this.props.plan;

		for( var i = 0; i < planConfigs.length; i++ )
		{
			var last = ( i === planConfigs.length - 1);
			options.push( <PricingOption isLastItem={ last } timeline={ timeline } config={ planConfigs[i] } key={ i } /> );
		}

		return(
			<div className="container mb-5">
				<div className="pricing-option-container">
					{ options }
				</div>
			</div>
		);
	}
}