import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movie: [
        { _id: 1, Title: 'Spider-man Far From Home', Description: 'Peter Parkers relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg'},
        { _id: 2, Title: 'Beautiful Noise', Description: 'Beautiful Noise is a 2014 American music documentary film, written and directed by Eric Green. The film documents three rock bands—Cocteau Twins, The Jesus and Mary Chain, and My Bloody Valentine—and their influence on shoegazing and other alternative rock genres. Beautiful Noise features extracts from over 50 interviews with bands and artists, as well as archival footage and music videos.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Beautiful_Noise_poster.jpg'},
        { _id: 3, Title: 'The Decline of Western Civilization', Description: 'A documentary film or documentary is a non-fictional motion-picture intended to document reality, primarily for the purposes of instruction, education, or maintaining a historical record.', ImagePath: 'https://images-na.ssl-images-amazon.com/images/I/81gb-j1XFsL.jpg'}
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
    const { movie, selectedMovie } = this.state;
  

  
    if (movie.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movie.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}