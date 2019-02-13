import React, { Component } from 'react';
import '../App.css';

import logo from '../logo.png'
import Button from './Button'



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  connection = () => {
    console.log("ok");
  }

  render() {

    return (
      <div id="navbar" className="col-12 flex flex-row">
        <img src={logo} alt="logo du site" />
        <div>MyMovies</div>
        <Button content={"Liste de film"} handle={this.connection} />
        <Button content={"Mes films favoris"} handle={this.connection} />
        <Button content={"connexion"} handle={this.connection} />
      </div>
    );
  }
}

export default Navbar;
