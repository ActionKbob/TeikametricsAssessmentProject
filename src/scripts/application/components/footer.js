import React from 'react';

export default class Footer extends React.Component
{
	render()
	{
		return(
			<div className="container mb-5">
				<div className="footer d-flex flex-column flex-lg-row justify-content-lg-between pt-4">
					<div className="footer-column">
						<img src="/resources/images/teika_logos/TeikaLogo_H_black.svg" />
						<p className="copywrite grey-text mt-3">Copyright &copy; 2015-17 teikametrics</p>
					</div>
					<div className="footer-column d-flex flex-column align-items-start align-items-lg-end mt-3 mt-lg-0">
						<div className="d-flex flex-column flex-lg-row align-items-start justify-content-start align-items-lg-center justify-content-lg-center">
							<a className="d-block d-lg-none" href="https://www.teikametrics.com/">Contact Us</a>
							<a href="https://www.teikametrics.com/">Privacy Policy</a>
							<a href="https://www.teikametrics.com/">Terms &amp; Conditions</a>
							<a href="https://www.teikametrics.com/">Made with <img src="/resources/images/footer/heart.svg"/> in Boston</a>
						</div>
						<img className="mt-lg-4" src="/resources/images/footer/socialicons.svg"/>
					</div>
				</div>
			</div>
		);
	}
}