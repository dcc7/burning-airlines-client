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

  // handleSubmit


  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" required placeholder="Origin" onChange={ this._handleChangeOrigin } value={ this.state.origin }/>
          <input type="text" required placeholder="Destination" onChange={ this._handleChangeDest } value={ this.state.destination } />
          <button>Search Flights</button>
        </form>
      </div>
    );
  }
}




export default Searchflights
