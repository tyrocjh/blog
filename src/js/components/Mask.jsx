import React, { Component } from 'react';

export default class Mask extends Component {
	render() {
		const { mask } = this.props;

		if(mask) {
			return <div className="mask"></div>
		} else {
			return null;
		}
	}
}