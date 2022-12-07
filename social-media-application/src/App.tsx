import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserProfile from './Components/UserProfile/UserProfile';
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<UserProfile />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
