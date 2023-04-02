import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Customizer from './components/Customizer';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route element={<Navigate to="/Home" />} path="/" />
            <Route element={<SignUp />} path="signup" />
            <Route element={<Home />} path="home" />
            <Route element={<Customizer />} path="customize" />
            <Route element={<Login />} path="login" />
    </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
  );
}

export default App;
