import React, { Component } from 'react';

class Seatsmap extends Component {

  constructor() {
    super();
    this.state = {
      rows: [],
      columns: []
    };
    // this.rowsArray = this.rowsArray.bind(this);
    // this.colsArray = this.colsArray.bind(this);
  }



componentDidMount() {

  const rowsArray = (rows) => {
    const tempArray = [];
    for (let i=0; i<rows; i++) {
      tempArray.push(i)
      }
    this.setState({rows: [...tempArray]})
  }

  const colsArray = (cols) => {
    const tArray = [];
    for (let j=0; j<cols; j++) {
      let p = String.fromCharCode(97 + j)
      tArray.push(p)
      }
    this.setState({columns: [...tArray]})
  }

  const checkState = (rows, cols) => {
      rowsArray(rows)
      colsArray(cols)
  };

  setInterval(function() {console.log('hello')}, 5000)
  setInterval(checkState(this.props.seatrows, this.props.seatcolumns), 5000)
}

  render() {
    return (
          <div>
            <table>
              {this.state.rows.map((row) =>
                <tr>{this.state.columns.map((col) =>
                  <td>{(row+1) + col}</td>)}
                </tr>)}
            </table>
          </div>
        )
    };
}

// {this.state.columns.map((col) => <td>{col}</td)}

  export default Seatsmap