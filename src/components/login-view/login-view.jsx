import React, { useState } from 'react';

import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import "./login-view.scss";
import axios from 'axios';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://myflix-sgf.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };

  return (
    <Container className="login-container">
      <Row>
        <Col></Col>
        <Col>
          <Card className="loginCard">
          <p style={{ color: "white" }}>Sign in to myFlix!</p>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label style={{ color: "white" }}>Username:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='register-card' controlId="formPassword">
                <Form.Label style={{ color: "white" }}>Password:</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Log In
              </Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

