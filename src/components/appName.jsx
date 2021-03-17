import Typed from "react-typed";

function AppName() {
	return (
		<div className="app-name">
			<Typed strings={["Surviv<strike>ing</strike>ed 2020"]} typeSpeed={40} />
		</div>
	);
}

export default AppName;
