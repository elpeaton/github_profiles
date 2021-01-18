import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import CSSReset from "./components/CSSReset";
import { AppContainer } from "./components/Styles";
import SearchUsers from "./features/SearchUsers/SearchUsers";
import Profile from "./features/Profile/Profile";

function App() {
  return (
    <Router>
      <AppContainer>
        <CSSReset />
        <Switch>
          <Route path={["/", "/search"]} exact component={SearchUsers} />
          <Route path={["/user"]} component={Profile} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
