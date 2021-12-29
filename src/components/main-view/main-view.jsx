import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Spider-man Far From Home', Description: 'Peter Parkers relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission.', ImagePath: '...'},
        { _id: 2, Title: 'Beautiful Noise', Description: 'Beautiful Noise is a 2014 American music documentary film, written and directed by Eric Green. The film documents three rock bands—Cocteau Twins, The Jesus and Mary Chain, and My Bloody Valentine—and their influence on shoegazing and other alternative rock genres. Beautiful Noise features extracts from over 50 interviews with bands and artists, as well as archival footage and music videos.', ImagePath: '...'},
        { _id: 3, Title: 'The Decline of Western Civilization', Description: 'A documentary film or documentary is a non-fictional motion-picture intended to document reality, primarily for the purposes of instruction, education, or maintaining a historical record.', ImagePath: '...'}
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
  

  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}