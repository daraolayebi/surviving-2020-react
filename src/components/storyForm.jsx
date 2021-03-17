import React, {Component} from "react";
import NavArrow from "../assets/icons/arrow-navigation-white.svg";

class StoryForm extends Component {
	state = {
		name: "",
		city: "",
		response: "",
		button: false,
	};

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	toggleClause = (action) => {
		if (action === "remove" && this.state.response) document.body.classList.remove("has-clause");
		else if (action === "add") document.body.classList.add("has-clause");
	};

	hideClause = (el) => {
		console.log("sdf");
	};

	submitResponse = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<React.Fragment>
				<div className="story-form">
					<form onSubmit={this.submitResponse} autoComplete="off">
						<input autoComplete="false" type="hidden" />
						<div className="form-body">
							<div className="form-group-block">
								<label>First Name:</label>
								<input
									type="text"
									aria-label="First Name"
									name="name"
									id="name"
									className="form-input"
									placeholder="First Name"
									onChange={this.handleChange}
									maxLength="25"
									autoComplete="off"
									required
								/>
							</div>
							<div className="form-group-block">
								<label>City:</label>
								<input
									type="text"
									aria-label="City"
									name="city"
									id="city"
									className="form-input"
									placeholder="City"
									onChange={this.handleChange}
									maxLength="25"
									autoComplete="off"
									required
								/>
							</div>
							<div className="main-label">
								<div>
									{this.props.activePhrase}
									<span className="phrase-dots"> . . .</span>
								</div>
								<div className="main-label-toggle">
									<p className="phrase-switch" onClick={() => this.props.displayPhrases()}>
										Change Story
									</p>
								</div>
							</div>
							<div className="form-group">
								<input
									type="text"
									aria-label="Response"
									name="response"
									id="response"
									// onKeyPress="showSubmitButton('.submit-button', '.form-clause')"
									// onKeyUp="showSubmitButton('.submit-button', '.form-clause')"
									onFocus={() => this.toggleClause("add")}
									onBlur={() => this.toggleClause("remove")}
									onChange={this.handleChange}
									placeholder="Your response goes here"
									className="main-input"
									maxLength="70"
									autoComplete="off"
									required
								/>
							</div>
							<div className="form-footer">
								<small className="form-clause">
									* After you submit, you will see your story on the stories page.
								</small>
							</div>
							{/* <small className="form-error">
								We are having some trouble submitting your response. Please try again.
							</small> */}
							<div className="form-button">
								<button type="submit" className="button submit-button" aria-label="Submit FormSubmit Form">
									<span>Submit</span>
									<img src={NavArrow} alt="Navigation Arrow" title="Navigation Arrow" />
								</button>
							</div>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default StoryForm;
