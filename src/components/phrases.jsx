import React, {Component} from "react";

class PhrasesList extends Component {
	state = {
		phrases: [
			{id: 1, message: "My 2020 was", bgColor: "#0c494c"},
			{id: 2, message: "This season has taught me", bgColor: "#776079"},
			{id: 3, message: "This year, I've witnessed", bgColor: "#344D68"},
			{id: 4, message: "By the end of 2021, I will", bgColor: "#134A69"},
		],
	};

	render() {
		const phraseList = this.state.phrases.map((phrase, index) => (
			<li className="phrase-item" key={index} onClick={() => this.props.updatePhrase(phrase)}>
				{phrase.message} <span className="phrase-dots">. . .</span>
			</li>
		));
		return (
			<React.Fragment>
				{/* <h3 className="phrase-label">Click to choose your starting phrase</h3> */}
				<ul className="phrase-dropdown">{phraseList}</ul>
			</React.Fragment>
		);
	}
}

export default PhrasesList;
