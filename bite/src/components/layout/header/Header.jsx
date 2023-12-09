import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
	const Links = [
		{
			to: "/",
			label: "Home",
		},
		{
			to: "/about",
			label: "About",
		},
	];

	return (
		<div>
			{Links.map((items, index) => (
				<Link key={index + 1} to={items.to}>
					{items.label}
				</Link>
			))}
		</div>
	);
};

export default Header;
