import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import {
  faUser,
  faMessage,
  faBars,
  faPeopleRobbery,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faPeopleRobbery} className='logo' />
        </Navbar.Brand>
      </Container>
      <Nav className='nav'>
        <input type='text' name='search' placeholder='Search' />
        <Nav.Link href="/profile">
          <FontAwesomeIcon icon={faUser} className='icon' />
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faMessage} className='icon' />
        </Nav.Link>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>
            <FontAwesomeIcon icon={faBars} className='icon' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
