import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class About extends Component {
	render() {
		return (
			<div className="about-project">
				<div className="about-project-inner">
					<h1>About #Surviving2020</h1>
					<div className="about-project-text">
						<p>
							Hi! My name is{" "}
							<u>
								<a target="_blank" rel="noreferrer" href="https://www.oluwadara.com/">
									{" "}
									Dara Olayebi
								</a>
							</u>
							. Surviving 2020 is a web project I built to bring people together by connecting them during this very
							unusual year. With four different phrases, I invite you to express yourself by sharing your emotions,
							experiences and thoughts with other people around the world.
							<br />
							<br />
							I hope this project brings you a little peace knowing that you are not alone, and most importantly,
							that we will survive this tough year together!
							<br />
							<br />
							<small>
								<i>P.S. I do not own any of the photographs used in the slideshow.</i>
							</small>
						</p>
					</div>

					<h2 className="close-about" onClick={this.props.history.goBack}>
						<u>Close</u>
					</h2>
				</div>
			</div>
		);
	}
}

export default withRouter(About);
