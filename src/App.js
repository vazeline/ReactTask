import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import './App.css';
import {Jumbotron} from 'react-bootstrap';
import Products from './components/Products';
import ViewEditProduct from './components/ViewEditProduct';

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
  constructor(props){
    super(props);
    this.state = {
      viewProductOpened: false,
      editProductOpened: false
    };
  }
  getInitialState(){
    return {
      viewProductOpened: false,
      editProductOpened: false
    };
  }
  OnEdit(opened){
    this.setState({editProductOpened: opened});
  }
  OnView(opened){
    this.setState({viewProductOpened: opened});
  }

  render() {
    return (
      <div className="App">
        <Jumbotron >
          <h2 className="App-title">React JS Test Task</h2>
        </Jumbotron>
        <div className="container">

        <Products products={this.props.products} 
          onView={function(){this.OnView(true)}.bind(this)} 
          onEdit={function(){this.OnEdit(true)}.bind(this)} />

        <ViewEditProduct isEdit={false} visible={this.state.viewProductOpened} 
          onHide={function(){this.OnView(false)}.bind(this)} />
        <ViewEditProduct isEdit={true} visible={this.state.editProductOpened} 
          onHide={function(){this.OnEdit(false)}.bind(this)} />

        </div>
      </div>
    );
  }
}

export default App;
