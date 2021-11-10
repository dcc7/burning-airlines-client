import React, { Component } from 'react';


class Searchflights extends Component {

  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
     };
  }




  _handleChangeOrigin(event) {
    this.setState({origin: event.target.value})
  }
  _handleChangeDest(event) {
    this.setState({destination: event.target.value})
  }

  // handleSubmit, call the parent function and pass up the origin and destination.
  _handleSubmit() {
    // this.props.onSubmit(this.state.origin, this.state.destination);
  }

  render() {
    return(
      <div>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" required placeholder="Origin" onChange={ this._handleChangeOrigin } value={ this.state.origin }/>
          <input type="text" required placeholder="Destination" onChange={ this._handleChangeDest } value={ this.state.destination } />
          <button>Search Flights</button>
        </form>
      </div>
    );
  }
}




export default Searchflights
