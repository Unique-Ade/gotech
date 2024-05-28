import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Registration from "./Authentication/Registration";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <div className="index_body">
            <Route path="">
              <Registration />
            </Route>

          </div>
        </Switch>

      </div>

    </Router>

  );
}

export default App;
