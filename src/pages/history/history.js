import React, { Component } from 'react';
//import classes from './history.sass';

class History extends Component {
	constructor(props) {
		super(props);

		this.state = {
			history: []
		};
	}
	render() {
		return (
			<div id='History'>
				<h3>History</h3>
			</div>
		)
	}
}

export default History;