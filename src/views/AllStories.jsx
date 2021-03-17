import React, {Component} from "react";

class AllStories extends Component {
	state = {
		response: {},
	};
	togglePause = () => {};

	render() {
		const {response} = this.state;
		return (
			<div className="stories">
				<div className="responses-list">
					<div className="responses-inner">
						<div className="loader-icon">{/* <img src="@/assets/images/loader.svg" alt="loading" /> */}</div>
						<div className="single-response" v-if="windowWidth <= 768" v-for="(response, key) in responses">
							{response.response}
							<span className="response-owner">
								&mdash; {response.name}, {response.city}
							</span>
						</div>
						{/* <dynamic-marquee v-if="windowWidth > 768" :reverse="true" direction="column" :speed="scrollSpeed" :hoverPause="false" :pause="pause"> */}
						<div className="single-response" v-for="(response, key) in responses">
							{response.response}
							<span className="response-owner">
								&mdash; {response.name}, {response.city}
							</span>
						</div>
						{/* </dynamic-marquee> */}
					</div>
					<div className="responses-toggle">
						<button onClick={this.togglePause}>
							<img src="@/assets/images/play.svg" alt="play" v-if="pause" title="pause" />
							<img src="@/assets/images/pause.svg" alt="pause" v-if="!pause" title="play" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AllStories;
