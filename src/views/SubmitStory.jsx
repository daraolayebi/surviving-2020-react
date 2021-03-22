import React, {Component, lazy} from "react";
const StoryForm = lazy(() => import("../components/storyForm"));
const PhrasesList = lazy(() => import("../components/PhrasesList"));

class SubmitStory extends Component {
	state = {
		activePhrase: {
			bgColor: "#0b1c25",
		},
	};

	componentDidMount() {
		this.displayPhraseList();
	}

	displayPhraseList = () => {
		document.body.classList.add("has-phrases");
	};

	setActivePhrase = (phrase) => {
		document.body.classList.remove("has-phrases");
		this.setState({activePhrase: phrase});
	};

	render() {
		const {activePhrase} = this.state;
		return (
			<React.Fragment>
				<div className="submit-story" style={{background: activePhrase.bgColor}}>
					<div className="inactive-overlay"></div>
					<PhrasesList updatePhrase={this.setActivePhrase} />
					<StoryForm activePhrase={activePhrase.message} displayPhrases={this.displayPhraseList} />
				</div>
			</React.Fragment>
		);
	}
}

export default SubmitStory;
