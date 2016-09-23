import React, { Component } from 'react';

export default class LabItem extends Component {
	handleClick() {
		alert('不想做了！');
	}

	render() {
		const { lab } = this.props;
		
		return (
			<div className="lab-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
				<a onClick={this.handleClick}>
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