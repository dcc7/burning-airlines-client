import React, { Component } from 'react';


class Searchflights extends Component {

  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
    };
    this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
    this._handleChangeDest = this._handleChangeDest.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }




  _handleChangeOrigin(event) {
    this.setState({origin: event.target.value})
  }
  _handleChangeDest(event) {
    this.setState({destination: event.target.value})
  }

  // handleSubmit, call the parent function and pass up the origin and destination.
  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination); //calling onSubmit in parent (Search.js) and passing two parameters.
    this.setState({origin: '', destination: ''}) //so once the search is done the input boxes are cleared?
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
