import React, { Component } from 'react';

import { fetchLabs } from '../../actions/labs';
import LabItem from './LabItem';

export default class LabList extends Component {
	constructor(props) {
		super(props);
		const { dispatch, labs } = this.props;
		if(labs.datas.length === 0)
			dispatch(fetchLabs());
	}

	render() {
		const { labs } = this.props;

		let labList = labs.datas.map((data, index) => {
			return <LabItem key={index} lab={data} />;
		})

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