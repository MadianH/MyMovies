import React, { Component } from 'react';
import './App.css';


class Card extends Component {
  render() {
    return (
      <div className="card col-6 col-lg-3">
        <img src={this.props.img} className="img" alt="affiche du film" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <div className="card-text">
            <p>{this.props.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
