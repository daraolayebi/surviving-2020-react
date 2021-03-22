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
							Hi! 👋🏾 My name is{" "}
							<u>
								<a target="_blank" rel="noreferrer" href="https://www.oluwadara.com/">
									{" "}
									Dara Olayebi
								</a>
							</u>
							. Surviving 2020 is a web project I built with the aim of connecting people during the very unusual
							year that was 2020. With four different phrases, I invite you to express yourself by sharing your
							emotions, experiences and thoughts with people around the world.
							<br />
							<br />
							I hope this project brings you a little bit of joy, knowing that you are not alone, but most
							importantly, that you survived 2020!
							<br />
							<br />
							<small>
								<i>P.S. I do not own any of the photographs used in the slideshow.</i>
							</small>
						</p>
					</div>

					<button className="close-about" onClick={this.props.history.goBack}>
						<u>Close</u>
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(About);
