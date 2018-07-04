import React from 'react';

export default class SiteMap extends React.Component
{
	render()
	{
		return(
			<div className="container mb-5">
				<div className="row sitemap-links">
					<div className="col-12 col-lg-2 d-flex flex-column">
						<a href="https://www.teikametrics.com/">Optimize for</a>
						<a className="grey-text"href="https://www.teikametrics.com/">FBA Insite</a>
						<a className="grey-text"href="https://www.teikametrics.com/">Sponsored Products</a>
					</div>
					<div className="col-12 col-lg-2"><a href="https://www.teikametrics.com/">Sellers</a></div>
					<div className="col-12 col-lg-2"><a href="https://www.teikametrics.com/">Agencies</a></div>
					<div className="col-12 col-lg-2 d-flex flex-column">
						<a href="https://www.teikametrics.com/">Resources</a>
						<a className="grey-text"href="https://www.teikametrics.com/">Webinars & Ebooks</a>
						<a className="grey-text"href="https://www.teikametrics.com/">Blog</a>
					</div>
					<div className="col-12 col-lg-2">
						<a href="https://www.teikametrics.com/">Company</a></div>
					<div className="col-12 col-lg-2"><a href="https://www.teikametrics.com/"><button className="btn btn-big filled">Get a free demo</button></a></div>
				</div>
			</div>
		);
	}
}