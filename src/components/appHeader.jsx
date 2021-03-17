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
				</header>
			</Fragment>
		);
	}
}

export default AppHeader;
