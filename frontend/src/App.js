import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import CardMovie from './Components/Card'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "chargement...",
      movieList: []
    };
  }


  componentDidMount(){
      fetch('http://localhost:3000/movieList')
      .then((response) => response.json())
      .then((data) => {
        let newMovieList = [...data.movieList]
        this.setState({movieList: newMovieList, loading: ""})
      }).catch((error) => {
        console.log("request failed :", error)
        this.setState({loading: "erreur lors du chargement..."})

      })
  }

  render() {
    let movieList = this.state.movieList.map((item, index) => {
        return <CardMovie key={index} id={item.id} title={item.title} overview={item.overview} img={item.img} />
      })
    return (
      <div className="App container-fluid">
        <div className="row flex flex-row justify-center">
          <Navbar />
          {movieList}
          {this.state.loading}
        </div>
      </div>
    );
  }
}

export default App;
