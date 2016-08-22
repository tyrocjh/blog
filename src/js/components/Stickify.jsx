import React, { Component } from 'react';

export default function(InnerComponent, getTriggerHeight) {
	class StickyComponent extends Component {
		constructor(props) {
			super(props);
			this.state = { sticky: false };
			this.onScroll = this.onScroll.bind(this);
		}

		componentDidMount() {
			window.addEventListener('scroll', this.onScroll, false);
		}

		componentWillUnmount() {
			window.addEventListener('scroll', this.onScroll, false);
		}

		onScroll() {
			if(window.scrollY >= getTriggerHeight() && !this.state.sticky) {
				this.setState({sticky: true});
			} else if(window.scrollY < getTriggerHeight() && this.state.sticky) {
				this.setState({sticky: false});
			}
		}

		render() {
			return (
				<InnerComponent {...this.props} sticky={this.state.sticky} />
			)
		}
	}

	return StickyComponent;
}