import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import AppName from "./appName";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";

class AppHeader extends Component {
	state = {
		menuIsVisible: false,
	};
	toggleMenu = () => {
		// @click="toggleMenu('.mobile-menu-list')"
	};

	showAbout = () => {
		// @click="showAboutContent"
	};

	render() {
		let mobileIcon;
		if (this.menuIsVisible) {
			mobileIcon = <img src={Close} alt="menu" className="mobile-menu" />;
		} else {
			mobileIcon = <img src={Menu} alt="menu" className="mobile-menu" />;
		}

		return (
			<Fragment>
				<header className="app-header">
					<div className="header-inner">
						<Link to="/" className="for-desktop">
							<AppName />
						</Link>

						<div className="mobile-menu-icon" onClick={this.toggleMenu}>
							{mobileIcon}
						</div>
					</div>

					{/* <div className="mobile-menu-list">
							<div className="app-name">
								<AppName />
							</div>
							<li className="footer-link">
								<Link to="/">Home</Link>
							</li>
							<li className="footer-link" onClick={this.showAbout}>
								<span>About Project</span>
							</li>
							<li className="footer-link">
								<Link to="/submit-story">Share your story</Link>
							</li>
							<li className="footer-link">
								<Link to="/stories">Explore stories</Link>
							</li>
						</div> */}
				</header>
			</Fragment>
		);
	}
}

export default AppHeader;
