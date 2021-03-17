import Typed from "react-typed";

function AppName() {
	return (
		<div className="app-name">
			<Typed strings={["Survived<strike>ing</strike> 2020"]} typeSpeed={40} />
		</div>
	);
}

export default AppName;
