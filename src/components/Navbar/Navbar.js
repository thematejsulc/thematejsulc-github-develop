import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className="db dt-l w-100 border-box pa3 ph5-l pv5-l">
			<a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l f4-l"	href="#" title="Home">
				Compendium of works up until 2023
			</a>
			<a className="db dtc-l v-mid dark-gray link dim w-100 w-25-l tc tr-l mb2 mb0-l f4-l" href="#" title="Info">
				Info
			</a>
		</nav>
	);
}

export default Navbar;
