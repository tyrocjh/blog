import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';

export default class Layout extends Component {
  render() {
    return (
    	<div>
    		<HeaderContainer />
    		<div id="app-main">
    			{this.props.children}
    		</div>
    		<FooterContainer />
    	</div>
    )
  }
}