import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd';
import { faToolbox } from '@fortawesome/free-solid-svg-icons/faToolbox';

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
          <p className='intro'>The most advanced git solution from the African continent</p>

          <div className='advantages'>
            <Row>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>Transfer from GitHub or Gitlab</h3>
                  <p>At Nimba, we understand that you have been using other platforms because they work great, but also because you had no choice! Now that you do, it is time to transfer everything to Nimba.</p>
                </div>
              </Col>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>Host your project's like anywhere else</h3>
                  <p>We really wanted to craft a solution that did not make our users feel like they were downgrading by using a service from Africa, so Nimba is as powerful and fast as any other Git client.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>We give back to the community</h3>
                  <p>Nimba pledged to help the community here in Africa. The basic service is free, but if you need more and decide to go Premium, 50% of your membership fee will be used to educate the community about Tech.</p>
                </div>
              </Col>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faToolbox} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>Connect with your preferred services</h3>
                  <p>Using Trello ? Slack ? Heroku ? Others ? Nimba allows you to connect to your preferred productivity or tech tools and better manage your projects.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#152715" fill-opacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,240C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>

        <div className='section-3-content'>
          <div className='grid-item-1'>1</div>
          <div className='grid-item-2'>2</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
