import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd';
import { faToolbox } from '@fortawesome/free-solid-svg-icons/faToolbox';

import figmaSrc from '../../images/figma.png';

import './Home.scss';

const Home = ({ email, errorEmail, handleFormChange, onEmailFormSubmit, isLoading, toggleShowToast, showToast }) => {
  return (
    <div id='home-page'>
      <div className='nav-container'>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">⛰ Nimba</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Platform</Nav.Link>
              <Nav.Link className='disabled-link' disabled href="#">Équipe</Nav.Link>
              <Nav.Link className='disabled-link' disabled href="#">Prix</Nav.Link>
              <Nav.Link className='disabled-link' disabled href="#">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='section-1'>
        <h1>Git en <span>Afrique</span> 🌍</h1>

        <h2>Nimba est un <b>client git</b> créé au coeur de l'Afrique, qui s'occupe de la communité.</h2>

        <div className='form-container'>
          <p>Nimba est en version alpha, inscrivez-vous pour être tenu au courant.</p>

          <Form className='form' onSubmit={onEmailFormSubmit}>
            <Form.Row className="align-items-center">
              <div className="left-input">
                <Form.Label htmlFor="inlineFormInputEmail" srOnly>
                  Email
                </Form.Label>
                <Form.Control
                  id="inlineFormInputEmail"
                  value={email}
                  isInvalid={errorEmail}
                  onChange={handleFormChange}
                  placeholder="jane.doe@example.com"
                />
              </div>
              <div className="right-button">
                <Button variant="success" type="submit" disabled={isLoading}>
                  {isLoading ?
                    <Spinner animation="border" role="status" size="sm">
                      <span className="sr-only">Chargement...</span>
                    </Spinner> :
                    "Je m'inscrire !"
                  }
                </Button>
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
          <h2>Un cadeau de l'Afrique pour le monde</h2>
          <p className='intro'>La plateforme git la plus avancée du continent</p>

          <div className='advantages'>
            <Row>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>Migration depuis GitHub ou Gitlab</h3>
                  <p>Chez Nimba, nous comprenons que vous utilisiez d'autres plateformes parce qu'elles fonctionnent très bien, mais aussi parce que vous n'aviez pas le choix! Maintenant que vous avez le choix, il est temps de nous faire confiance.</p>
                </div>
              </Col>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>Hébergez votre projet comme partout ailleurs</h3>
                  <p>Nous voulions vraiment créer une solution qui ne donne pas l'impression à nos utilisateurs de perdre en performance en utilisant un service africain, donc Nimba est aussi puissant et rapide que n'importe quel autre client Git.</p>
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
                  <h3>Nous redonnons à la communauté</h3>
                  <p>Nimba s'est engagé à aider la communauté ici en Afrique. Le service de base est gratuit, mais si vous avez besoin de plus et décidez de devenir Premium, 50% de votre cotisation sera utilisé pour éduquer la communauté sur la technologie.</p>
                </div>
              </Col>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faToolbox} />
                  </div>
                </div>
                <div className='inner-column'>
                  <h3>Connectez-vous avec vos services préférés</h3>
                  <p>Vous utilisez Trello ? Slack ? Heroku ? D'autres ? Nimba vous permet de vous connecter à vos outils de productivité ou technologiques préférés et de mieux gérer vos projets.</p>
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
          <div className='grid'>
            <div className='first-grid-components'>
              <div className='grid-item grid-item-1'>
                <div>
                  <h4>PRODUITS</h4>
                  <ul>
                    <li><a href='/'>Platforme</a></li>
                    <li>Add-ons</li>
                    <li>Teams</li>
                    <li>Enterprise</li>
                  </ul>
                </div>
                <div>
                  <h4>RESSOURCES</h4>
                  <ul>
                    <li>Prix</li>
                    <li>FAQ</li>
                    <li>Documentation</li>
                    <li>Développeurs</li>
                  </ul>
                </div>
              </div>
              <div className='grid-item grid-item-2'>
                <div>
                  <h4>ENTREPRISE</h4>
                  <ul>
                    <li>À propos</li>
                    <li>Blog</li>
                    <li>Recommandations</li>
                    <li className='help-community'>Aider la communauté 👫</li>
                  </ul>
                </div>
                <div>
                  <h4>LEGAL</h4>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Acceptable Use</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='grid-item-3'>
              <h4>INSCRIVEZ-VOUS À NOTRE NEWSLETTER</h4>
              <p>Les dernières nouvelles, articles et ressources, envoyés chaque semaine dans votre boîte de réception.</p>

              <Form className='newsletter-form'>
                <Form.Row className="align-items-center">
                  <div className="left-input">
                    <Form.Label htmlFor="inlineFormInputEmail" srOnly>
                      Email
                    </Form.Label>
                    <Form.Control id="inlineFormInputEmail" placeholder="jane.doe@example.com" disabled />
                  </div>
                  <div className="right-button">
                    <Button disabled variant="success" type="submit">S'inscrire</Button>
                  </div>
                </Form.Row>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-content'>
          <div>Copyright © Nimba | All right reserved.</div>
          <div>Fait avec 🧡depuis Abidjan.</div>
        </div>
      </div>

      <Toast
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
        onClose={toggleShowToast}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">⛰ Nimba</strong>
        </Toast.Header>
        <Toast.Body>Email enregistré ✅</Toast.Body>
      </Toast>
    </div>
  );
};

export default Home;
