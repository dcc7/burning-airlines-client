// Global stuff.
import React, { Component } from 'react';

// File stuff.
import Searchflights from "../components/Searchflights"
import Flightresults from "../components/Flightresults"

class Search extends Component {

  constructor() {
    super();
    this.state = {
      flights: []
    };
  }

  // const SERVER_URL = '';
  // API connection, this then updates the state?
  // const fetchFlights = () => {
  //   axios(SERVER_URL).then((response) => {
  //     this.setState({flightResults: response.traversingtheJSON });
  //   });
  // }

  render() {
    return (
      // passing down the flight data to the Searchflights child.
      <div>
        <h1>Search Flights</h1>
        <Searchflights />
        <Flightresults flights={this.state.flights}/>
      </div>
    );
  }
}

export default Search;
