// Global stuff
import React, { Component } from 'react';

class Flightresults extends Component {

  constructor() {
    super();
    this.state = {
      flightId: 0
    };
    this.handleClick = this._handleClick.bind(this);
  }


  _handleClick = (event) => {
    this.setState({flightId: event.target.innerText})
    // JS of going to this directory.
    window.location.href = `/flight/${event.target.innerText}`
    // To get the last bit of text, we can use JS in the new page, like params from rails.
  }

  render() {
    return (
          <div>
            <table>
             <tr>
               <td>Departure date</td>
               <td>Flight number</td>
               <td>Origin</td>
               <td>destination</td>
             </tr>
            {this.props.flights.map((flight) =>
              <tr>
               <td>{flight.departure_date}</td>
               <td onClick={ this._handleClick }>{flight.id}</td>
               <td>{flight.origin}</td>
               <td>{flight.destination}</td>
             </tr>
            )}
            </table>
          </div>
        )
    };
}

export default Flightresults
