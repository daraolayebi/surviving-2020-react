import React, {Component} from "react";
import NavArrow from "../assets/icons/arrow-button.svg";
import FormSuccessModal from "./FormSuccessModal";
import baseURL from "../resources/apiBaseUrl";
import axios from "axios";

class StoryForm extends Component {
	state = {
		name: "",
		city: "",
		response: "",
		loading: false,
		submitted: false,
		error: false,
	};

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	showClause = () => {
		document.body.classList.add("has-clause");
	};

	hideClause = () => {
		if (!this.state.response) document.body.classList.remove("has-clause");
	};

	clearModal = () => {
		this.setState({submitted: false});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (!event.target.checkValidity()) return;

		let payload = {
			name: this.state.name,
			city: this.state.city,
			response: this.props.activePhrase + " " + this.state.response,
		};

		this.setState({loading: true, error: false});

		axios
			.post(baseURL + "/response", payload)
			.then((response) => {
				this.setState({loading: false, submitted: true});
			})
			.catch((error) => {
				this.setState({loading: false, error: true});
			});
	};

	render() {
		const {loading, error, submitted} = this.state;
		return (
			<React.Fragment>
				<div className="story-form">
					<form onSubmit={this.handleSubmit} autoComplete="off">
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
										Click to change phrase
									</p>
								</div>
							</div>
							<div className="form-group">
								<input
									type="text"
									aria-label="Response"
									name="response"
									id="response"
									onFocus={this.showClause}
									onBlur={this.hideClause}
									onChange={this.handleChange}
									placeholder="Your response goes here"
									className="main-input"
									maxLength="70"
									autoComplete="off"
									required
								/>
								<button
									type="submit"
									disabled={loading}
									className="button submit-button"
									aria-label="Submit Form"
									title="Submit Form">
									<span>
										{loading ? (
											<span className="saving">
												Saving your story <span>.</span>
												<span>.</span>
												<span>.</span>
											</span>
										) : (
											"Share"
										)}
									</span>
									{!loading && <img src={NavArrow} alt="Navigation Arrow" title="Navigation Arrow" />}
								</button>
							</div>
							<div className="form-footer">
								<small className="form-clause">
									* After you submit, your story will appear on the stories page.
								</small>
							</div>
							{error && (
								<small className="form-error">
									We are having some trouble submitting your response. Please try again.
								</small>
							)}
						</div>
					</form>
					{submitted && <FormSuccessModal clearModal={this.clearModal} />}
				</div>
			</React.Fragment>
		);
	}
}

export default StoryForm;
