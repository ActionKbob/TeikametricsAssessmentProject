import React from 'react';
import PricingOption from 'application/components/pricingOption';

import planConfigs from 'data/planConfigs'

export default class PricingOptionContainer extends React.Component
{
	render()
	{

		var options = [];

		for( var i = 0; i < planConfigs.length; i++ )
		{
			options.push( <PricingOption config={ planConfigs[i]} key={ i } /> );
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