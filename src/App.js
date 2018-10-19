import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
import History from './pages/history/history';
import Player from './pages/player/player';

import axios from 'axios';

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			movies: [],
      isLoading: true,
      movieSelected: [{
        "title": "10 Things I Hate About You",
        "description": "A new kid must find a guy to date the meanest girl in school, the older sister of the girl he has a crush on, who cannot date until her older sister does.",
        "type": "movie",
        "publishedDate": 931478400000,
        "availableDate": 931478400000,
        "metadata": [
        {
        "value": "en",
        "name": "language"
        }
        ],
        "contents": [
        {
        "url": "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
        "format": "mp4",
        "width": 640,
        "height": 360,
        "language": "en",
        "duration": 3600000,
        "geoLock": false,
        "id": "vid_103"
        }
        ],
        "credits": [
        {
        "role": "Director",
        "name": "Gil Junger"
        },
        {
        "role": "Heath Ledger",
        "name": "Heath Ledger"
        },
        {
        "role": "Julia Stiles",
        "name": "Julia Stiles"
        },
        {
        "role": "Joseph Gordon-Levitt",
        "name": "Joseph Gordon-Levitt"
        }
        ],
        "parentalRatings": [
        {
        "scheme": "MPAA",
        "rating": "PG_13"
        }
        ],
        "images": [
        {
        "type": "cover",
        "url": "https://picsum.photos/200/500?t=1",
        "width": 214,
        "height": 317,
        "id": "f67e6e8a7478d1dae24e869f3d7081cf"
        }
        ],
        "categories": [
        {
        "title": "Comedy",
        "description": "Comedy movies",
        "id": "movies-comedy"
        },
        {
        "title": "Drama",
        "description": "Drama movies",
        "id": "movies-drama"
        },
        {
        "title": "Romance",
        "description": "Romantic movies",
        "id": "movies-romance"
        }
        ],
        "id": "10-things-i-hate-about-you"
        } ],
      history: []
		};
  }

  componentDidMount() {

		axios.get("http://localhost:8000/api")
			.then(response => {
				this.setState({ movies: response.data.entries });
				this.setState({ isLoading: true });
			})
			.catch(error => {
				this.setState({ isLoading: false });
			});
  }
  
  render() {
    return (
      <Router>
      <div>
        <Navbar>
          <Nav>
            <NavItem href="/">
              Home
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/history">
              History
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home movies={this.state.movies}
                  isLoading={this.state.isLoading}
                  movieSelected={this.state.movieSelected}
                  history={this.state.history} />
          </Route>
          <Route path="/history" component={History} />
          <Route path="/:id">
            <Player movieSelected={this.state.movieSelected} />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
