import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import Products from './components/Products';
import EditProduct from './components/EditProduct';
import ViewProduct from './components/ViewProduct';
import { BrowserRouter, Route } from 'react-router-dom';
import * as ActionCreators from './redux/Actions';
import Helpers from './Helpers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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

  saveProduct(prod) {
    if (prod.id === new Helpers().getNextId(this.state.products)) {
      this.state.products.push(prod);
      this.setState(this.state);
    }
    else
      for (let i = 0; i < this.state.products.length; i++) {
        let p = this.state.products[i];
        if (p.id === +prod.id) {
          p.name = prod.name;
          p.description = prod.description;
          p.price = prod.price;
          p.creationdate = prod.creationdate;

          this.setState(this.state);
          break;
        }
      }
  }

  DeleteProduct(id) {
    for (let i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === +id) {
        this.state.products.splice(+i, 1);
        this.setState(this.state);
        break;
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  render() {
    const { dispatch, products, selectedPlayerIndex } = this.props;
    const addProduct = bindActionCreators(ActionCreators.addProduct, dispatch);
    const removeProduct = bindActionCreators(ActionCreators.removeProduct, dispatch);
    const editProduct = bindActionCreators(ActionCreators.editProduct, dispatch);
    const selectProduct = bindActionCreators(ActionCreators.selectProduct, dispatch);

    return (
      <div className="App">
        <Jumbotron >
          <h2 className="App-title">React JS Test Task</h2>
        </Jumbotron>
        <div className="container">
          <BrowserRouter>
            <div>
              <Route path="/" render={(rprops) => <Products history={rprops.history} products={products} onDelete={removeProduct} />} />
              <Route path="/view/:id" render={(rprops) => <ViewProduct match={rprops.match} history={rprops.history} products={products} />} />
              <Route path="/edit/:id" render={(rprops) => <EditProduct match={rprops.match} history={rprops.history} products={products} onSaveProduct={editProduct} />} />
              <Route path="/add" render={(rprops) => <EditProduct isAdd={true} onSaveProduct={addProduct} match={rprops.match} history={rprops.history} products={products} />} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  {
    products: state.products//,
    //selectedPlayerIndex: state.selectedPlayerIndex
  }
};

export default connect(mapStateToProps)(App);
