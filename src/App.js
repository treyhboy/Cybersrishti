import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import { Router, BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home/Home";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  html{
  font-size: 10px;
  font-family: 'Lato', sans-serif;
  }
`;

class App extends Component {
    render() {
      return (
          <Router history={createBrowserHistory()}>
            <div>
              <GlobalStyle />
              <BrowserRouter>
                <Switch>
                  <Route path="/" component={Home} />
                </Switch>
              </BrowserRouter>
            </div>
          </Router>
    );
  }
}

export default App;
