import React, {Component} from 'react';
import axios from 'axios';
import baseURL from '../resources/apiBaseUrl';

class StoriesList extends Component {
	state = {
		loading: false,
		stories: [],
	};

	fetchStories = () => {
		axios
			.get(baseURL + '/responses')
			.then((response) => {
				this.setState({loading: false, stories: response.data.data});
			})
			.catch((error) => {
				this.setState({loading: false, stories: []});
			});
	};

	componentDidMount() {
		this.setState({loading: true});
		this.fetchStories();
	}

	render() {
		const {loading, stories} = this.state;
		return (
			<React.Fragment>
				{loading ? (
					<h2>Loading stories ...</h2>
				) : (
					<React.Fragment>
						{stories.map(function (story, index) {
							return (
								<div className="single-response" key={index}>
									{story.response}
									<span className="response-owner">
										&mdash; {story.name}, {story.city}
									</span>
								</div>
							);
						})}
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default StoriesList;

// const StoriesScroll = () => {
// 	const [loading, setLoadingState] = useState(true);
// 	const [stories, setStories] = useState([]);

// 	axios
// 		.get(baseURL + "/responses")
// 		.then((response) => {
// 			// console.log(response);
// 			setLoadingState(false);
// 			setStories(response.data.data);
// 		})
// 		.catch((error) => {
// 			setLoadingState(false);
// 			setStories([]);
// 		});

// 	return (
// 		<div>
// 			{loading ? (
// 				<p>Loading...</p>
// 			) : (
// 				<div className="single-response">
// 					{stories.map(function (story, index) {
// 						return (
// 							<span key={index}>
// 								{story.response}
// 								<span className="response-owner">
// 									&mdash; {story.name}, {story.city}
// 								</span>
// 							</span>
// 						);
// 					})}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default StoriesScroll;
