// Global stuff.
import React, { Component } from 'react';

// File stuff. More stuff.
import Searchflights from "../components/Searchflights"
import Flightresults from "../components/Flightresults"

class Search extends Component {

  constructor() {
    super();
    this.state = {
      flights: [],
      origin: '',
      destination: ''
    };
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
    console.log(origin, destination); //this somehow works now Jonny. Good luck!
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
