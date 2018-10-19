import React, { Component } from 'react';

import {BrowserRouter as Router, Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Loading from './../../img/loading.gif';
import './home.sass';

import MovieCard from './../../components/movieCard/movieCard';
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			//isLoading: false
			// movies: props.movies
		};
	}

	responsive = {
		0: { items: 2 },
		600: { items: 3 },
		1024: { items: 6 },
	};

	chooseMovie = (x) => {
		var movieChoosen = x;
		var oldMovieSelected = this.props.movieSelected;
		oldMovieSelected = movieChoosen;
		{ this.props.movieSelected = oldMovieSelected; }
	}

	render() {
		const isLoading = this.props.isLoading && MovieCard.length !== 0
		const item = this.props.movies.map((movie) => {
			return (
				<div key={movie.id}  onClick={this.chooseMovie.bind(this,movie)}>
					<Link to={"/" + movie.id}>
						<img src={movie.images[0].url} alt={movie.title}/>
					<p>{movie.title}</p>
					</Link>
				</div>
			)
		});
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