import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movie: [],
      selectedMovie: null
    }
  }

  componentDidMount(){
    axios.get('https://myflix-sgf.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movie, selectedMovie } = this.state;
  

  
    if (movie.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movie.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(newSelectedMovie) }}/>
          ))
        }
      </div>
    );
  }
}