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
import axios from 'axios';
import { useNavigate } from "react-router";

const Navigation = () => {

    const navigate = useNavigate();


  const logoutHandler = () => {

  const cookie = document.cookie.slice(8);
  axios.get("http://localhost:8090/log-out/" + cookie).then((response) => {
        console.log(response);
        return navigate("/login");
    });
  }

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
            <Dropdown.Item><button onClick={logoutHandler}>Logout</button></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
