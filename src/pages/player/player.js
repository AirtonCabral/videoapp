import React, { Component } from 'react';
//import classes from './history.sass';

class Player extends Component {
	constructor(props) {
		super(props);
		this.state= {}
	}
	render() {
		return (
			<div id='History'>
				<h3>Player</h3>
				{/* {this.props.movieSelected[0].title} */}
			</div>
		)
	}
}

export default Player;