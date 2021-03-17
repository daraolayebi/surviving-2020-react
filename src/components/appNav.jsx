import React, {Component} from "react";
import {Link} from "react-router-dom";

class AppFooter extends Component {
	state = {};

	updateBg = (colour) => {
		console.log(colour);
	};

	removeBg = (colour) => {
		console.log(colour);
	};

	render() {
		return (
			<footer className="footer">
				<ul>
					<li className="footer-link" onMouseOver={this.updateBg("green")} onMouseLeave={this.removeBg("green")}>
						<Link to="/submit-story">Share A Story</Link>
					</li>
					<li className="footer-link">
						<Link to="/about-project">About Project</Link>
					</li>
					<li className="footer-link" onMouseOver={this.updateBg("blue")} onMouseLeave={this.removeBg("blue")}>
						<Link to="/explore-stories">Explore Stories</Link>
					</li>
				</ul>
			</footer>
		);
	}
}

export default AppFooter;
