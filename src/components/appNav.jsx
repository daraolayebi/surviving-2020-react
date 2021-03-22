import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppName from "./appName";

class AppFooter extends Component {
	state = {};

	updateBg = (colour) => {
		// console.log(colour);
	};

	removeBg = (colour) => {
		// console.log(colour);
	};

	render() {
		return (
			<nav className="app-menu">
				<ul>
					<li className="for-mobile">
						<AppName />
					</li>
					<li className="menu-link for-mobile">
						<Link to="/">Home</Link>
					</li>
					<li className="menu-link" onMouseOver={this.updateBg("green")} onMouseLeave={this.removeBg("green")}>
						<Link to="/submit-story">Share A Story</Link>
					</li>
					<li className="menu-link">
						<Link to="/about-project">About Project</Link>
					</li>
					<li className="menu-link" onMouseOver={this.updateBg("blue")} onMouseLeave={this.removeBg("blue")}>
						<Link to="/explore-stories">Explore Stories</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default AppFooter;
