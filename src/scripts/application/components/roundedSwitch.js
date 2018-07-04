import React from 'react';

export default class RoundedSwitch extends React.Component
{
	handleInputChange( _event )
	{
		this.props.onChange( _event.target.checked );
	}

	render()
	{

		let { defaultChecked } = this.props;
		return(
			<label className="switch">
				<input type="checkbox" onChange={ this.handleInputChange.bind(this) } checked={defaultChecked} />
				<span className="slider"></span>
			</label>
		);
	}
}