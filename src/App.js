import "./assets/styles/App.scss";
import React, {Component, Fragment, Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";

import AppHeader from "./components/appHeader";
import AppNav from "./components/appNav";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));
const SubmitStory = lazy(() => import("./views/SubmitStory"));
const AllStories = lazy(() => import("./views/AllStories"));

class App extends Component {
	render() {
		return (
			<Fragment>
				<AppHeader />
				<Switch>
					<Suspense fallback={<div>Loading...</div>}>
						<Route path="/about-project" component={About}></Route>
						<Route path="/submit-story" component={SubmitStory}></Route>
						<Route path="/explore-stories" component={AllStories}></Route>
						<Route exact path="/" component={Home}></Route>
						<Route render={() => <h1>404: page not found</h1>} />
					</Suspense>
				</Switch>
				<AppNav />
			</Fragment>
		);
	}
}

export default App;
