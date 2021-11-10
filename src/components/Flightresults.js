// Global stuff
import React, { Component } from 'react';

// File stuff



function Flightresults(props) {

  let flights = props.flights.map((flight) => {
    return flight
  })

  return (
    <div>
      {flights}
    </div>
  )

}




export default Flightresults
