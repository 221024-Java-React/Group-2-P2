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
  faDoorOpen,
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

        return navigate("/login");
    });
  }

  return (
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand>
            <Nav.Link href="/">
                <FontAwesomeIcon icon={faPeopleRobbery} className='logo' />
            </Nav.Link>
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
        <FontAwesomeIcon icon={faDoorOpen} id="logout-button" onClick={logoutHandler}/>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
