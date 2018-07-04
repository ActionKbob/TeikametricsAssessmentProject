import React from 'react';
import { connect } from 'react-redux';

@connect( ( store ) => {
	return( {
		timeline : store.plan.timeline
	} );
} )
export default class ContactUs extends React.Component
{
	render()
	{
		let { timeline } = this.props;

		var yearlyClass = ( timeline === 'yearly' ) ? 'yearly-color' : '';

		var arrowHref = ( timeline === 'yearly' ) ? "/resources/images/arrows/purple_arrow.svg" : "/resources/images/arrows/blue_arrow.svg";

		return(
			<div className="container mb-5">
				<div className="d-flex flex-column align-items-center justify-content-center">
					<h1 className="font-light">Are you an agency?</h1>
					<p className="mb-4">We’d love to talk with you about your Sponsored Products needs!</p>
					<a href="https://www.teikametrics.com/">
						<button className={ "btn-timeline-colored btn btn-big " + yearlyClass }>Contact Us <img className="ml-2" src={ arrowHref } /></button>
					</a>
				</div>
			</div>
		);
	}
}