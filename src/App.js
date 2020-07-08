import React, { Component } from 'react';
import Main from "./components/MainComponent";
import './App.css';

class App extends  Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

/*
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}
*/

export default App;
