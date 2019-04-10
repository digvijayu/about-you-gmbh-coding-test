import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppState } from './store';
import { SystemState } from './store/system/types';
import { updateSession } from './store/system/actions';
import { GridState } from './store/grid/types';
import Grid from './pages/Grid';
import ProductViewer from './pages/ProductViewer';
import { loadProductsThunk } from './store/grid/thunks';

interface AppProps {
  updateSession: typeof updateSession;
  grid: GridState;
  system: SystemState;
  loadProductsThunk: any;
}

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.loadProductsThunk();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Grid} />
          <Route exact path="/product/:id" component={ProductViewer} />
        </Router>
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
  { loadProductsThunk }
)(App);
