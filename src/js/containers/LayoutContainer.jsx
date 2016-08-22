import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import ToolbarContainer from './ToolbarContainer';

export default class Layout extends Component {
  render() {
    return (
    	<div>
    		<HeaderContainer />
    		<div id="app-main">
    			{this.props.children}
    		</div>
            <ToolbarContainer />
    		<FooterContainer />
    	</div>
    )
  }
}