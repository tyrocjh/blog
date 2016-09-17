import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';
import LabContainer from './containers/LabContainer';
import CommentContainer from './containers/CommentContainer';
import FriendshipContainer from './containers/FriendshipContainer';
import NotFound from './components/NotFound';

export default (
	<Router>
		<Route path="/" component={LayoutContainer}>
			<IndexRoute component={HomeContainer} />
			<Route path="blog" component={BlogContainer} />
			<Route path="blog/:id" component={BlogContainer} />
			<Route path="labs" component={LabContainer} />
			<Route path="comment" component={CommentContainer} />
		</Route>
		<Route path="/directories" component={FriendshipContainer} />
		<Route path="*" component={NotFound} status={404} />
	</Router>
);