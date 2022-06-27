import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd';
import { faToolbox } from '@fortawesome/free-solid-svg-icons/faToolbox';

import './Home.scss';
import Typist from 'react-typist';
import { useTranslation } from 'react-i18next';

const Home = ({ toggleShowToast, showToast, tiers }) => {
  const { t, i18n } = useTranslation();

  return (
    <div id='home-page'>
      <div className='nav-container'>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <div className="brand-container">
              <span>⛰ Nimba</span>
              <span className='version'>v1</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link className="login-btn" href="https://app.nimba.ci/login">
                <Button variant="success" type="button">{t('login')}</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='section-1'>
        <h1>{t('title.part-1')} <br /> <span>GIT</span> {t('title.part-2')} <br /> <span>{t('title.part-3')}</span></h1>

        <h2>{t('subtitle-1')}</h2>

        <div className="typist-container">
          <div className="black-box">
            <Typist
              startDelay={1000}
              cursor={{ show: false }}
            >
              <span className="code">npm i -g nimba</span>
            </Typist>
          </div>
        </div>
      </div>

      <div className='section-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#264726" fill-opacity="1" d="M0,192L30,186.7C60,181,120,171,180,170.7C240,171,300,181,360,160C420,139,480,85,540,85.3C600,85,660,139,720,170.7C780,203,840,213,900,181.3C960,149,1020,75,1080,42.7C1140,11,1200,21,1260,48C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>

        <div className='section-2-content'>
          <h2>{t('subtitle-2')}</h2>

          <p className='intro'>{t('section-2-intro')}</p>

          <div className='advantages'>
            <Row>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column left-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <span className='version'>v2</span>
                </div>
                <div className='inner-column'>
                  <h3>{t('section-2-migr-github-title')}</h3>
                  <p>{t('section-2-migr-github-description')}</p>
                </div>
              </Col>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column left-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <span className='version'>v1</span>
                </div>
                <div className='inner-column'>
                  <h3>{t('section-2-host-title')}</h3>
                  <p>{t('section-2-host-description')}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column left-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                  </div>
                  <span className='version'>v1</span>
                </div>
                <div className='inner-column'>
                  <h3>{t('section-2-community-title')}</h3>
                  <p>{t('section-2-community-description')}</p>
                </div>
              </Col>
              <Col sm='6' className='advantages-col'>
                <div className='inner-column left-column'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faToolbox} />
                  </div>
                  <span className='version'>v3</span>
                </div>
                <div className='inner-column'>
                  <h3>{t('section-2-integration-title')}</h3>
                  <p>{t('section-2-integration-description')}</p>
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
          <h2>{t('subtitle-3')} <span>Patreon</span></h2>

          <p className='intro'>{t('section-3-intro')}</p>

          <div className="tiers-container">
            {tiers.map(tier => (
              <div className='tier-container'>
                <h3>{tier.name}</h3>
                <h4>{tier.price} €</h4>
                <p>{t("per-month")}</p>
                <ul>
                  {tier.advantages.map(advantage => (
                    <li>{advantage}</li>
                  ))}
                </ul>
                <Button className='join-btn' href={tier.link}>{t("donate")}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-content'>
          <div>Copyright © Nimba | All right reserved.</div>
          <div>{t('done-in')}</div>
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
