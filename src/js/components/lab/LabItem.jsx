import React, { Component } from 'react';

export default class LabItem extends Component {
	render() {
		const { lab } = this.props;
		
		return (
			<div className="lab-item col-lg-3 col-md-4 col-sm-6">
				<a href="#">
					<img src={lab.cover} />
					<i className="fa fa-link"></i>
					<div className="info">
						<h4>{lab.title}</h4>
						<p>{lab.intro}</p>
					</div>
				</a>
			</div>
		)
	}
}