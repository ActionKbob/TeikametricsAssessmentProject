import React from 'react';
import SellerItem from './sellersItem';

export default class Sellers extends React.Component
{
	render()
	{

		const logoHref = "/resources/images/company_pngs/";

		var itemHrefs = [
			logoHref + "techarmor.png",
			logoHref + "markcubancompanies.png",
			logoHref + "greengobbler.png",
			logoHref + "kissmyketo.png",
			logoHref + "hyperikon.png",
			logoHref + "tipsyelves.png",
			logoHref + "nutpods.png",
			logoHref + "marathonsports.png",
			logoHref + "powerpractical.png",
			logoHref + "greengobbler.png",
			logoHref + "pavoi.png",			
			logoHref + "thursdayboots.png"
		];

		var items = [];

		for( var i = 0; i < itemHrefs.length; i++ )
		{
			items.push( <SellerItem src={ itemHrefs[i] } key={ i }/> );
		}

		return(
			<div className="mb-5">
				<div className="container d-flex flex-column align-items-center">
					<p style={ { color : "#B1D253" } } className="text-small">MEET OUR CUSTOMERS</p>
					<h3 className="mb-4">A few of our growing list of successful Amazon sellers</h3>
					<span className="sellers-seperator"></span>
				</div>
				<div className="container">
					<div className="row sellers-grid">
						{ items }
					</div>
				</div>
			</div>
		);
	}
}