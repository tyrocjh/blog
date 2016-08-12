import React, { Component } from 'react';
import LabItem from './LabItem';

export default class LabList extends Component {
	render() {
		let labList = [1,1,1,1,1,1,1,1,1,1].map(() => <LabItem />)

		return (
			<div className="lab-list">
				<div className="container">
					<div className="row">
						{labList}
					</div>
				</div>
			</div>
		)
	}
}