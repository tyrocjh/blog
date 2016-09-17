import { combineReducers } from 'redux';
import labs from './labs';
import blogs from './blogs';
import blogTags from './blogTags';
import blogArticle from './blogArticle';
import githubInfo from './githubInfo';
import friendship from './friendship';
import { pagination, commentByPage } from './comment';
import modal from './modal';

const rootReducer = combineReducers({
	labs,
	blogs,
	blogTags,
	blogArticle,
	friendship,
	pagination,
	commentByPage,
	githubInfo,
	modal
});

export default rootReducer;