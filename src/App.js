import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React, { useState } from 'react';
import LoginForm from './login/LoginForm';
import NewUserForm from './login/NewUserForm';
import Cart from './checkout/Cart';
import NavBar from './Navbar';
import Products from './products/Products';
import logo from './logo.png';


function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
    <img className='logo' src={logo} alt="Amazon Logo" />
      <Router>
        <NavBar/>
        <Routes>
        <Route exact path='/' element={<Products addToCart={setCartItems} />} />
        <Route exact path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route exact path='/create-new-user' element={< NewUserForm/>}></Route>
          <Route exact path='/login' element={< LoginForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
