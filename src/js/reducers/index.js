import { combineReducers } from 'redux';
import labs from './labs';
import blogs from './blogs';
import blogTags from './blogTags';

const rootReducer = combineReducers({
	labs,
	blogs,
	blogTags
});

export default rootReducer;