import React, { Component } from 'react';
import DeviceMobile from './DeviceMobile';
import DevicePc from './DevicePc';
import DevicePad from './DevicePad';

export default class Device extends Component {
	render() {
		return (
			<div className="device-container">
				<DeviceMobile />
				<DevicePc />
				<DevicePad />
			</div>
		)
	}
}