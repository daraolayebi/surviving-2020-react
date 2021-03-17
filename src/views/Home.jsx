import React, {Component} from "react";
import Typed from "react-typed";
import Slideshow from "../components/imageSlideshow";

class Home extends Component {
	state = {
		slideshowVisible: true,
	};

	// componentDidMount() {
	// 	this.setState({slideshowVisible: true});
	// }

	render() {
		return (
			<div className="home">
				<div className="home-inner">
					<Slideshow />
					{/* {this.slideshowVisible ? (
						<div>
							
						</div>
					) : (
						<div></div>
					)} */}

					{/* <transition name="slide-fade">
						<image-slideshow v-if="showSlideshow" />
					</transition> */}

					{/* <transition name="slide-fade"> */}
					<h1 className="home-intro">
						<Typed
							strings={[
								"Take a moment to share your 2020 story and discover what the rest of the world is going through ...",
							]}
							typeSpeed={40}
						/>
					</h1>
					{/* </transition> */}

					{/* <transition name="fade">
						<home-menu v-if="showMenu" />
					</transition> */}
				</div>
			</div>
		);
	}
}

export default Home;
