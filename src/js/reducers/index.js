import { combineReducers } from 'redux';
import labs from './labs';
import blogs from './blogs';
import blogTags from './blogTags';
import blogArticle from './blogArticle';

const rootReducer = combineReducers({
	labs,
	blogs,
	blogTags,
	blogArticle
});

export default rootReducer;