import { useNavigate } from 'react-router';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMessage,
  faPeopleRobbery,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
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
  );
};

export default Navigation;
