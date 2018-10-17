import React, { Component } from 'react';
import './style/Header.css';

class Header extends Component {
  render() {
   return (
     <header className = "header">
      <div>
       <h1>Wb-ui</h1>
       <span>组件</span>
      </div>
     </header>
   );
  }
}

export default Header;