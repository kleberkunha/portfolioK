import React from 'react';
import {   Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import goHome from './goHome';
import goAbout from './goAbout';
import goStudies from './goStudies';
import goProjects from './goProjects';

const MenuNav = () => {
  return (
      <>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container className="main-menu">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav">
              <Link  onClick={goHome}><h5>Home</h5></Link>
              <Link  onClick={goAbout}><h5>About me</h5></Link>
              <Link  onClick={goStudies}><h5>Studies</h5></Link>
              <Link  onClick={goProjects}><h5>Projects</h5></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
}

export default MenuNav;