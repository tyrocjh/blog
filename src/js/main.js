import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// import configureStore from './store/configureStore';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/main.scss';

// const store = configureStore();

ReactDOM.render(
	<Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
