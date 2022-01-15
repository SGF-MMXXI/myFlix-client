import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Col, Row } from "react-bootstrap";
import "./registration-view.scss";
import axios from "axios";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://myflix-sgf.herokuapp.com/login', {
        Username: username,
        Password: password,
        Email: email,
       
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        alert("Registration Success!");
        window.open("/", "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card className="registrationCard">
            <p style={{ color: "white" }}>Create New Account</p>

            <Form className="register-card" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formRegisterUsername">
                <Form.Label style={{ color: "white" }}>Username:</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formRegisterPassword">
                <Form.Label style={{ color: "white" }}>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: "white" }}>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

             
              <br />
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Register
              </Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  registration: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    
  }),
  onRegistration: PropTypes.func,
};