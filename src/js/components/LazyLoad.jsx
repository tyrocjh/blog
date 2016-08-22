import React, { Component } from 'react';

export default function(InnerComponent, getTriggerHeight, triggerFunction) {
	class LazyLoadComponent extends Component {
		constructor(props) {
			super(props);
			this.onScroll = this.onScroll.bind(this);
		}

		componentDidMount() {
			window.addEventListener('scroll', this.onScroll, false);
		}

		componentWillUnmount() {
			window.addEventListener('scroll', this.onScroll, false);
		}

		onScroll() {
			if(window.scrollY >= getTriggerHeight()) {
				const { dispatch, blogs } = this.props;
				dispatch(triggerFunction(blogs));
			}
		}

		render() {
			return (
				<InnerComponent {...this.props} />
			)
		}
	}

	return LazyLoadComponent;
}