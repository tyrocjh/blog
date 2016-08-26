import { combineReducers } from 'redux';
import labs from './labs';
import blogs from './blogs';
import blogTags from './blogTags';
import blogArticle from './blogArticle';
import friendship from './friendship';

const rootReducer = combineReducers({
	labs,
	blogs,
	blogTags,
	blogArticle,
	friendship
});

export default rootReducer;