import React from 'react';

import PricingOptionContainer from './components/pricingOptionContainer';
import ContactUsBucket from './components/contactUsBucket';

export default class Pricing extends React.Component
{
	render()
	{
		return(
			<div>
				<PricingOptionContainer/>
				<ContactUsBucket/>
			</div>
		);
	}
}