import { useNavigate } from 'react-router';
import axios from 'axios';

import {
  faUser,
  faMessage,
  faPeopleRobbery,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    const cookie = document.cookie.slice(8);
    axios.get('http://localhost:8090/log-out/' + cookie).then((response) => {
      return navigate('/login');
    });
  };

  return (
    <div className='navbar'>
      <a href='/' className='navbar-brand'>
        <FontAwesomeIcon icon={faPeopleRobbery} className='logo' />
        <h1>TimeBandit</h1>
      </a>
      <div className='nav'>
        <input type='text' name='search' placeholder='Search' />
        <a href='/profile'>
          <FontAwesomeIcon icon={faUser} className='icon' />
        </a>
        <a>
          <FontAwesomeIcon icon={faMessage} className='icon' />
        </a>
        <FontAwesomeIcon icon={faDoorOpen} onClick={logoutHandler} />
      </div>
    </div>
    // <Navbar className='navbar'>
    //   <Navbar.Brand href='/' className='navbar-brand'>
    //     <FontAwesomeIcon icon={faPeopleRobbery} className='logo' />
    //     <h1>TimeBandit</h1>
    //   </Navbar.Brand>
    //   <Nav className='nav'>
    //     <input type='text' name='search' placeholder='Search' />
    //     <Nav.Link href='/profile'>
    //       <FontAwesomeIcon icon={faUser} className='icon' />
    //     </Nav.Link>
    //     <Nav.Link>
    //       <FontAwesomeIcon icon={faMessage} className='icon' />
    //     </Nav.Link>
    //     <FontAwesomeIcon
    //       icon={faDoorOpen}
    //       id='logout-button'
    //       onClick={logoutHandler}
    //     />
    //   </Nav>
    // </Navbar>
  );
};

export default Navigation;
