import React, {Component} from "react";
import StoriesList from "../components/StoriesList";
import WorldMap from "../assets/icons/world-map.svg";

class AllStories extends Component {
	render() {
		return (
			<div className="stories">
				<div className="responses-list">
					<div className="responses-inner">
						<StoriesList />
					</div>
				</div>
				<img src={WorldMap} alt="World Map" className="responses-map" />
			</div>
		);
	}
}

export default AllStories;
