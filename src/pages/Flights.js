// Global stuff.
import React, { Component } from 'react';

// File stuff. More stuff.
import Flightresults from "../components/Flightresults"
import axios from 'axios'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      flightNumber: [],
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
      // passing down the flight data to the Searchflights child as a prop.
      <div>
        <h1>Seating</h1>
        <Flightresults/>
      </div>
    );
  }
}

export default Search;