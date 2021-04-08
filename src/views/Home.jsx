import React, {Component} from "react";
//import Typed from "react-typed";
import SlideshowGif from "../assets/images/slideshow.gif";

class Home extends Component {
	state = {
		slideshowVisible: false,
		slideshow: "",
		width: 0,
		height: 0,
	};

	updateWindowDimensions = () => {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	};

	componentDidMount() {
		this.timeout = setTimeout(() => {
			let home = document.querySelector(".home");
			this.setState({slideshowVisible: true});
			if (home) home.classList.add("no-divider");
		}, 2500);
		document.body.classList.remove("show-menu");
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	render() {
		return (
			<div className="home">
				<div className="home-inner">
					<div className="intro-content">
						{this.state.slideshowVisible && <img src={SlideshowGif} alt="Slideshow" className="slideshow-gif" />}
						<h1>Take a moment to share your 2020 story and discover what the rest of the world has been through</h1>
						{/* <h1 className="home-intro">
							{this.state.width <= 640 ? (
								<span>
									Take a moment to share your 2020 story and discover what the rest of the world has been
									through
								</span>
							) : (
								<Typed
									strings={[
										"Take a moment to share your 2020 story and discover what the rest of the world has been through",
									]}
									typeSpeed={40}
								/>
							)}
						</h1> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
