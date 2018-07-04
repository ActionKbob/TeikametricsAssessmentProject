import React from 'react';

import TimelineSelect from './components/timelineSelect';
import PricingOptions from './components/pricingOptions';
import ContactUs from './components/contactUs';
import IncludedInPlan from './components/includedInPlan';
import Sellers from './components/sellers';
import SiteMap from './components/siteMap';

export default class Pricing extends React.Component
{
	render()
	{
		return(
			<div>
				<TimelineSelect/>
				<PricingOptions/>
				<ContactUs/>
				<IncludedInPlan/>
				<Sellers/>
				<SiteMap/>
			</div>
		);
	}
}