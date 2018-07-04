import React from 'react';
import { connect } from 'react-redux';
import planConfigs from 'data/planConfigs';
import { Link } from 'react-router-dom';
import { changePlanType } from 'data/planActions';

@connect()
export default class PricingOption extends React.Component
{
	handleOnClick( _value )
	{
		this.props.dispatch( changePlanType( _value ) );
	}

	render()
	{

		let { timeline } = this.props;
		let { name, monthly, yearly, perMonthSpend } = this.props.config;		
		let priceValue = ( timeline == "yearly" ) ? yearly : monthly;

		var isLastItem = ( this.props.isLastItem !== undefined ) ? this.props.isLastItem : false;
		var usePlus = ( isLastItem ) ? "+" : "";
		var perMonthMessage = ( isLastItem ) ? "Over" : "Up to";

		var yearlyClass = ( timeline === 'yearly' ) ? 'yearly-color' : '';

		var buttonType = ( isLastItem ) ? <a href="https://www.teikametrics.com/"><button className={ "btn-timeline-colored btn btn-big " + yearlyClass }>Contact Us</button></a> : <Link to='/confirmation'><button className={ "btn-timeline-colored btn btn-big " + yearlyClass } onClick={ () => this.handleOnClick( name ) }>Select Plan</button></Link>;

		return(
			<div className="pricing-option">
				<div className={ "pricing-option-label d-flex justify-content-center align-items-center " + yearlyClass } >{ name }</div>
				<div className="pricing-option-content d-flex flex-column align-items-center">
					<div className="pricing-option-amount font-light">${ priceValue }{ usePlus }</div>
					<div className="grey-text font-normal">per month</div>
					<div className="pricing-option-seperator"></div>
					<div className="pricing-option-per-month mb-4">{ perMonthMessage } <strong>${ perMonthSpend }</strong> per month in advertising spend</div>
					{ buttonType }
				</div>
			</div>
		)
	}
}