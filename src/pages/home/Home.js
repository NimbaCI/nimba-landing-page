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

      <div className='section-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#264726" fill-opacity="1" d="M0,192L30,186.7C60,181,120,171,180,170.7C240,171,300,181,360,160C420,139,480,85,540,85.3C600,85,660,139,720,170.7C780,203,840,213,900,181.3C960,149,1020,75,1080,42.7C1140,11,1200,21,1260,48C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>

        <div className='section-2-content'>
          <h2>Africa's gift to the world</h2>
        </div>

      </div>
    </div>
  );
};

export default Home;
