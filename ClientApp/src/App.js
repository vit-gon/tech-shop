﻿import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/template/header/Header';
import Footer from './components/template/footer/Footer';
import Navigation from './components/template/navigation/Navigation';
import Curtain from './components/template/curtain/Curtain';
import Breadcrumb from './components/template/breadcrumb/Breadcrumb';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Navigation />
          <Curtain />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
