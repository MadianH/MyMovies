import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import './App.css';


class Card extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{this.props.overview}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Card;
