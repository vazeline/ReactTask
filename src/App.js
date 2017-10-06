import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import './App.css';
import {Jumbotron} from 'react-bootstrap';
import Products from './components/Products';
import ViewEditProduct from './components/ViewEditProduct';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      creationdate: PropTypes.string
    })).isRequired,
  } 


  render() {
    return (
      <div className="App">
        <Jumbotron >
          <h2 className="App-title">React JS Test Task</h2>
        </Jumbotron>
        <div className="container">
        <BrowserRouter>
        <div>
          <Route path="/" render={(rprops) => React.createElement(Products, {...rprops, ...this.props}) } />
          <Route path="/view/:id" render={ (rprops) => React.createElement(ViewEditProduct, {isEdit:false, ...rprops, ...this.props}) } />
          <Route path="/edit/:id" render={ (rprops) => React.createElement(ViewEditProduct, {isEdit:true, ...rprops, ...this.props})  } />
          </div>
        </BrowserRouter>

        </div>
      </div>
    );
  }
}

export default App;
