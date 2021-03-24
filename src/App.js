import "./assets/styles/App.scss";
import React, {Component, Fragment, Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";

import AppHeader from "./components/AppHeader";
import AppNav from "./components/AppNav";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));
const SubmitStory = lazy(() => import("./views/SubmitStory"));
const AllStories = lazy(() => import("./views/AllStories"));

class App extends Component {
	// componentDidUpdate(prevProps) {
	// 	console.log("ROUTE CHANGED");
	// 	if (this.props.location !== prevProps.location) {
	// 		console.log("ROUTE CHANGED");
	// 		this.onRouteChanged();
	// 	}
	// }

	render() {
		return (
			<Fragment>
				<AppHeader />
				<Switch>
					<Suspense fallback={<div style={{color: "red", fontSize: "100px"}}>Loading...</div>}>
						<Route path="/about-project" component={About}></Route>
						<Route path="/submit-story" component={SubmitStory}></Route>
						<Route path="/explore-stories" component={AllStories}></Route>
						<Route exact path="/" component={Home}></Route>
						{/* <Route render={() => <h1>404: page not found</h1>} /> */}
					</Suspense>
				</Switch>
				<AppNav />
			</Fragment>
		);
	}
}

export default App;
