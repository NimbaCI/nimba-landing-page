import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import figmaSrc from '../../images/figma.png';

import './Home.scss';

const Home = () => {
  return (
    <div id='home-page'>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">⛰ Nimba</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Platform</Nav.Link>
              <Nav.Link href="#">Team</Nav.Link>
              <Nav.Link eventKey={2} href="#">Pricing</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <div className='section-1'>
        <h1>Git from the <span>motherland</span></h1>

        <h2>Nimba is a <b>git client</b> made in the heart of Africa, that gives back to the community.</h2>

        <div className='form-container'>
          <p>Nimba is currently in beta, subscribe to be notified.</p>

          <Form className='form'>
            <Form.Row className="align-items-center">
              <div className="left-input">
                <Form.Label htmlFor="inlineFormInputEmail" srOnly>
                  Email
                </Form.Label>
                <Form.Control id="inlineFormInputEmail" placeholder="jane.doe@example.com" />
              </div>
              <div className="right-button">
                <Button variant="success" type="submit">Notify me!</Button>
              </div>
            </Form.Row>
          </Form>
        </div>
      </div>

      <img src={figmaSrc} className='figma-img' />
    </div>
  );
};

export default Home;
