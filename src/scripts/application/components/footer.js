import React from 'react';

export default class Footer extends React.Component
{
	render()
	{
		return(
			<div className="container">
				<div className="footer d-flex justify-content-between pt-4">
					<div>
						<img src="/resources/images/teika_logos/TeikaLogo_H_black.svg" />
						<p>Copyright &copy; 2015-17 teikametrics</p>
					</div>
					<div>
						<div className="d-flex align-items-center justify-content-center">
							<a href="https://www.teikametrics.com/">Privacy Policy</a>
							<a href="https://www.teikametrics.com/">Terms &amp; Conditions</a>
							<a href="https://www.teikametrics.com/">Made with <img src="/resources/images/footer/heart.svg"/> in Boston</a>
						</div>
						<img src="/resources/images/footer/socialicons.svg"/>
					</div>
				</div>
			</div>
		);
	}
}