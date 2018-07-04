import React from 'react';
import { connect } from 'react-redux';
import RoundedSwitch from 'application/components/roundedSwitch';

import { changePlanTimeline } from 'data/planActions';

@connect( ( store ) => {
	return( {
		timeline : store.plan.timeline
	} );
} )
export default class TimelineSelect extends React.Component
{

	onChange( _isChecked )
	{
		var timelineValue = ( _isChecked ) ? 'yearly' : 'monthly';
		this.props.dispatch( changePlanTimeline( timelineValue ) );
	}

	render()
	{

		let { timeline } = this.props;

		var yearlyClass = ( timeline === 'yearly' ) ? 'yearly-color' : '';

		return(
			<div className="container mb-4">
				<div className="row">
					<div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
						<div className="timeline-select-description d-flex flex-column align-items-center align-items-lg-start text-center text-lg-left">
							<p>OUR SIMPLE PRICING STRUCTURE</p>
							<h1 className="mb-0 font-light">Select the plan that matches your business</h1>
						</div>
					</div>
					<div className="col-12 col-lg-6 d-flex justify-content-center align-items-lg-end">
						<div className="my-3 mb-lg-1 mt-lg-0">
							<span className={ "timeline-select-label timeline-select-monthly-label font-normal " + yearlyClass }>Monthly Plan</span>
							<RoundedSwitch onChange={ this.onChange.bind( this ) } defaultChecked={ ( timeline == "yearly" ) }/>
							<span className={ "timeline-select-label timeline-select-yearly-label font-normal " + yearlyClass }>Yearly Plan <span className="d-none d-lg-inline">&ndash; Save 20%</span> </span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}