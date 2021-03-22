import React, {Component} from "react";
import {imageLinks as images} from "../resources/imageLinks";
import SlideshowGif from "../assets/images/slideshow.gif";

class Slideshow extends Component {
	state = {
		images,
		timer: null,
		currentIndex: 0,
	};

	componentDidMount() {
		setTimeout(() => {
			this.startSlide();
		}, 1000);
	}

	// setCurrentImage = () => {
	// 	return this.state.images[Math.abs(this.currentIndex) % this.state.images.length];
	// };

	startSlide = () => {
		console.log(200);
		// this.setState({timer: setInterval((this.state.currentIndex += 1), 2000)});
	};

	render() {
		return (
			<div className="slideshow">
				<div className="slideshow-container">
					<img src={SlideshowGif} alt="Slideshow" />
					{/* {this.setCurrentImage} */}
					{/* <div
						className="slideshow-slide"
						v-for="i in [currentIndex]"
						style={{backgroundImage: `url(${currentImg})`}}></div> */}
				</div>
			</div>
		);
	}
}

export default Slideshow;
