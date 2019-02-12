import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search APP</h1>
            <p>This is a simple Search App </p>
            <SearchForm />
          </Grid>
          <Results />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
