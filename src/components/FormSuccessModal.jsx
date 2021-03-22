import React, {useState} from "react";
import Plus from "../assets/icons/plus.svg";
import More from "../assets/icons/arrow-forward.svg";
import Copy from "../assets/icons/copy.svg";
import Twitter from "../assets/icons/twitter.svg";
import Facebook from "../assets/icons/facebook.svg";

// import {Plus, More, Copy, Twitter, Facebook} from '../assets/index'
import {FacebookShareButton, TwitterShareButton} from "react-share";
import {Link} from "react-router-dom";

const FormSubmitted = ({clearModal}) => {
	const shareUrl = "www.our2020stories.com";
	const [copySuccess, setCopySuccess] = useState("");

	function copyToClipboard(e) {
		navigator.clipboard.writeText(shareUrl);
		e.target.focus();
		setCopySuccess("Copied!");
	}

	return (
		<div className="success-wrapper">
			<div className="inactive-overlay"></div>
			<div className="success-wrapper-inner">
				<div className="success-headings">
					<h1>Here's to surviving 2020! 🥂</h1>
					<div className="success-cta">
						<button onClick={clearModal} className="success-action-button">
							<span>Share another story</span>
							<img src={Plus} alt="arrow" className="success-arrow" />
						</button>
						<Link to="/explore-stories">
							<button className="success-action-button">
								Explore other stories
								<img src={More} alt="arrow" className="success-arrow" />
							</button>
						</Link>
					</div>
				</div>

				<div className="share-channels">
					<TwitterShareButton
						url={shareUrl}
						title="Share your 2020 story in a sentence and read stories from around the world!"
						hashtags={["surviving2020"]}>
						<img src={Twitter} alt="twitter" />
					</TwitterShareButton>

					<FacebookShareButton
						url={shareUrl}
						quote="Share your 2020 story in a sentence and read stories from around the world!">
						<img src={Facebook} alt="facebook" />
					</FacebookShareButton>

					{document.queryCommandSupported("copy") && (
						<button onClick={copyToClipboard}>
							<img src={Copy} alt="copy" />
						</button>
					)}
					<span>{copySuccess}</span>
				</div>
			</div>
		</div>
	);
};

export default FormSubmitted;
