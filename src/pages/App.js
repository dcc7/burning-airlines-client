// Global Imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// File Imports
import Search from "./Search"
import Flights from "./Flights"


function App() {
  return (
    <Router>

      <div className="App">
        Burning Airlines
      </div>

      <Switch>
        <Route path="/flight/:id">
          <Flights />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
