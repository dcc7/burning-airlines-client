// Global stuff.
import React, { Component } from 'react';

// File stuff. More stuff.
import Flightresults from "../components/Flightresults"
import axios from 'axios'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      flightNumber: 0,
      rows: 0,
      columns: 0,
      seats: 0,
      name: ''
    };
  }



  componentDidMount(){
    const flightNumber = window.location.href.substring(window.location.href.lastIndexOf("/")+1)
    this.setState({flightNumber: flightNumber})

    axios('https://burning-airlines-oh-no.herokuapp.com/planes.json').then((response) => {
      const matches = [];
      response.data.forEach(plane => {
        if(plane.id === Number(this.state.flightNumber)) {
          matches.push(plane)
        }
      })
      this.setState({rows: matches[0].rows})
      this.setState({columns: matches[0].cols })
      this.setState({name: matches[0].name })

      const seatCalculator = () => {
        this.setState({seats: this.state.rows * this.state.columns});
      };
      seatCalculator();

    })
  };


  render() {
    return (
      <div>
        <h1>Seating</h1>
        <h4>Plane Name: { this.state.name }</h4>
        <h1>{ this.state.seats } Seats Available</h1>
        <SeatsMap seats={ this.state.seats }/>
      </div>
    );
  }
}

export default Search;


// Seats map component. Placed here out of laziness.

const SeatsMap = (props) => {
  const seatArray = Array.from(Array(props.seats).keys());
  const seats = seatArray.map((seat) => <button key={ seat }>{ seat + 1 }</button>)


  // for (let i = 0; i <= props.columns; i++) {
  //   for (let j = 0; j <= props.rows; j++ ) {
  //     <button>Seat</button>
  //   }
  // }


  return (
    <div>
      <h3>Seat Number</h3>
      { seats }
    </div>
  )
};
