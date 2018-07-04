import React from 'react';

export default class SellersItem extends React.Component
{
	render()
	{

		var { src } = this.props;

		return(
			<div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
				<img src={ src }/>
			</div>
		);
	}
}