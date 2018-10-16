import React, { Component } from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Loading from './../../img/loading.gif';
import './home.sass';
var axios = require('axios');
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [],
			isLoading: true
		};
	}

	responsive = {
		0: { items: 1 },
		600: { items: 2 },
		1024: { items: 4 },
	};

	componentDidMount() {
		axios.get("http://localhost:8000/api")
			.then(response => {
				this.setState({ movies: response.data.entries });
				this.setState({ isLoading: true });
				console.log(this.state.movies, this.state.isLoading)
			})
			.catch(error => {
				this.setState({ isLoading: false });
			});
	}

	render() {
		const item = this.state.movies.map((movie) => {
			return (
				<div key={movie.id}>
					<img src={movie.images[0].url} alt={movie.title} />
					<p>{movie.title}</p>
				</div>
			)
		});
		const isLoading = this.state.isLoading && item.length !== 0
		return (
			<div id='Home'>
				<img src={Loading} alt='loading...' className= {isLoading ? 'HideLoading' : 'Show'}/>
				<AliceCarousel
					items={item}
					responsive={this.responsive}
					duration={400}
					autoPlay={true}
					startIndex = {1}
					fadeOutAnimation={true}
					mouseDragEnabled={true}
					autoPlayInterval={2000}
					className= {isLoading ? 'Show' : 'Hide'}>
					</AliceCarousel>
			</div>
		)
	}
}

export default Home;