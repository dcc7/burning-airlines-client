// Global stuff.
import React, { Component } from 'react';

// File stuff. More stuff.
import Searchflights from "../components/Searchflights"
import Flightresults from "../components/Flightresults"
import axios from 'axios'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      flights: [],
    };
    this.saveFlights = this.saveFlights.bind(this)
  }

  // const SERVER_URL = '';
  // API connection, this then updates the state?
  // const fetchFlights = () => {
  //   axios(SERVER_URL).then((response) => {
  //     this.setState({flightResults: response.traversingtheJSON });
  //   });
  // }

  // Function to take in data from the child.
  saveFlights(origin, destination) {
    axios('https://burning-airlines-oh-no.herokuapp.com/flights.json').then((response) => {
      const matches = [];
      response.data.forEach(flight => {
        if(flight.origin === origin && flight.destination === destination) {
          matches.push(flight)
        }      
      })
      this.setState({flights: [...this.state.flights, ...matches]})
    })
  };

  render() {
    return (
      // passing down the flight data to the Searchflights child as a prop.
      <div>
        <h1>Search Flights</h1>
        <Searchflights onSubmit={this.saveFlights} />
        <Flightresults flights={this.state.flights}/>
      </div>
    );
  }
}

export default Search;
