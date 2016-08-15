import React, { Component } from 'react';

import { fetchLabs } from '../../actions/labs';

import LabItem from './LabItem';

export default class LabList extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		dispatch(fetchLabs())
	}

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