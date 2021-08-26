import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import JoinGame from "./Views/joinGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <JoinGame />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
