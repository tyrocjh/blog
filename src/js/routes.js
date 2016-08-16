import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';
import LabContainer from './containers/LabContainer';
import BlogContainer from './containers/BlogContainer';
import NotFound from './components/NotFound';

export default (
	<Router>
		<Route path="/" component={LayoutContainer}>
			<IndexRoute component={HomeContainer} />
			<Route path="labs" component={LabContainer} />
			<Route path="blog" component={BlogContainer} />
		</Route>
		<Route path="*" component={NotFound} status={404} />
	</Router>
);