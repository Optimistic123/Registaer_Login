import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';

import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import Aboutus from './components/Pages/Aboutus';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Allfaq from './components/Pages/Allfaq'
function App() {
  return (

      <Router>
        <Navbar />
        {/* <div className='line'></div> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/faq' component={Allfaq} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
  );
}

export default App;