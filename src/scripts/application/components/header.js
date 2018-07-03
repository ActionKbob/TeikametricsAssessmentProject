import React from 'react';

export default class Header extends React.Component
{
	render()
	{
		return(
			<div className="container">
				<div className="header d-flex justify-content-center align-items-center">
					<img src="/resources/images/teika_logos/TeikaLogo_H_black.svg" />
				</div>
			</div>
		);
	}
}