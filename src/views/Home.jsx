import React, {Component} from "react";
import Typed from "react-typed";
// import Slideshow from "../components/imageSlideshow";
import SlideshowGif from "../assets/images/slideshow.gif";

class Home extends Component {
	state = {
		slideshowVisible: false,
		slideshow: "",
	};

	componentDidMount() {
		setTimeout(() => {
			let home = document.querySelector(".home");
			this.setState({slideshowVisible: true});
			if (home) home.classList.add("no-divider");
		}, 2500);
	}

	render() {
		return (
			<div className="home">
				<div className="home-inner">
					<div className="intro-content">
						{this.state.slideshowVisible && <img src={SlideshowGif} alt="Slideshow" className="slideshow-gif" />}
						<h1 className="home-intro">
							<Typed
								strings={[
									"Take a moment to share your 2020 story and discover what the rest of the world has been through",
								]}
								typeSpeed={40}
							/>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
