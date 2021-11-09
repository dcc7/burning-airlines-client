// Global Imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// File Imports
import Search from "./Search"


function App() {
  return (
    <Router>

      <div className="App">
        Burning Airlines Coming Soon
      </div>

      <Switch>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
