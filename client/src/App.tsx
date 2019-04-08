import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AppState } from './store';
import { SystemState } from './store/system/types';
import { updateSession } from './store/system/actions';
import { GridState } from './store/grid/types';
import Grid from './pages/Grid';

interface AppProps {
  updateSession: typeof updateSession;
  grid: GridState;
  system: SystemState;
  thunkSendMessage: any;
}

class App extends Component<AppProps> {
  state = {
    message: ''
  };

  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  grid: state.grid
});

export default connect(
  mapStateToProps,
  {}
)(App);
