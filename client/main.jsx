import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render, hydrate } from 'react-dom';
import Layout from "../imports/ui/Layout";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
});

Meteor.startup(() => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" name="home" component={Layout} exact />
          <Route path="/page1" name="page1" component={Layout} />
          <Route path="/page2" name="page2" component={Layout} />
          <Route path="/page3" name="page3" component={Layout} />
        </Switch>
      </Router>
    </ThemeProvider>
    ,document.getElementById('react-target'));
});
