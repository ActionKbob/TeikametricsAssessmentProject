import React from 'react';


export default class IncludedInPlanItem extends React.Component
{
	render()
	{
		let { icon, header, content } = this.props.itemConfig;

		return(
			<div className="col-12 col-md-6 col-lg-4 mb-5">
				<div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
					<img src={ icon } className="mr-lg-3" />
					<div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-left">
						<div className="included-in-plan-grid-item-header font-normal my-2 mt-lg-0">{ header }</div>
						<div className="">{ content }</div>
					</div>
				</div>
			</div>
		);
	}
}