import React from 'react';
import IncludedInPlanItem from './includedInPlanItem';

export default class IncludedInPlan extends React.Component
{
	render()
	{

		const iconHref = "/resources/images/plans_svgs/";
		var itemConfigs = [
			{
				icon : iconHref + "dashboard.svg",
				header : "Powerful Dashboard",
				content : "All-in-one dashboard with essential key performance metrics and next-gen graphing capabilities."
			},
			{
				icon : iconHref + "bullhorn.svg",
				header : "Unlimited SP Campaigns",
				content : "No limits or maximums. Run as many Sponsored Products campaigns as you’d like."
			},
			{
				icon : iconHref + "keyworddiscovery.svg",
				header : "Targeted Keyword Suggestions",
				content : "Easy to execute keyword actions make reducing wasted ad spend and increasing profitability simple."
			},
			{
				icon : iconHref + "chat.svg",
				header : "Expert Support",
				content : "Never go alone again. Take advantage of online, expert chat with our Customer Success team."
			},
			{
				icon : iconHref + "auction.svg",
				header : "Value-based Bidding",
				content : "With our value-based bidding automation you’ll never pay too much (or too little) for a bid again."
			},
			{
				icon : iconHref + "calendar.svg",
				header : "Your Data, Your Way",
				content : "Our calendar allows you to see your data in a daily, weekly, monthly, yearly, or even custom view."
			}
		]

		var items = [];

		for( var i = 0; i < itemConfigs.length; i++ )
		{
			items.push( <IncludedInPlanItem itemConfig={ itemConfigs[i] } key={ i } /> );
		}

		return(
			<div className="container mb-5">
				<h3 className="mb-5 text-center text-lg-left">Included in all plans</h3>
				<div className="row included-in-plan-grid">
					{ items }
				</div>
			</div>
		);
	}
}