import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import { Container, Col, Row } from "react-bootstrap";
import "./main-view.scss";

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      register: null
    };
  }
 
  componentDidMount(){
    axios.get('https://myflix-sgf.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(movie) {
    this.setState({
    selectedMovie: movie
    });
}

  onRegistration(register) {
    this.setState({
      register
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;
  
    if (!user)
      return (
        <div>
          <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
          <RegistrationView />
        </div>
      );
  
    if (movies.length === 0) return <div className="main-view"/>
  
    return (
      <div className="main-view">
      <Container fluid>
        <Row className="justify-content-md-center">
          {selectedMovie ? (
            <Col md={8}>
              <MovieView
                movie={selectedMovie}
                onBackClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ) : (
            movies.map((movie) => (
              <Col md={3}>
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    this.setSelectedMovie(newSelectedMovie);
                  }}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}
}