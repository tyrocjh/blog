import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import ToolbarContainer from './ToolbarContainer';

export default class Layout extends Component {
  render() {
    return (
	  <div>
	    <HeaderContainer />
		<div id="app-main">
          <ReactCSSTransitionGroup component="div" transitionName="page-transition" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {React.cloneElement(this.props.children, { key: location.pathname })}
          </ReactCSSTransitionGroup>
		</div>
        <ToolbarContainer />
	    <FooterContainer />
	  </div>
    )
  }
}