import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import Products from './components/Products';
import ViewEditProduct from './components/ViewEditProduct';
import { BrowserRouter, Route } from 'react-router-dom';

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
    if (prod.id === this.state.nextId) {
      this.state.products.push(prod);
      this.state.nextId = prod.id + 1;
      this.setState(this.state);
    }
    else
      for (let i in this.state.products) {
        let p = this.state.products[+i];
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
    for (let i in this.state.products) {
      if (this.state.products[+i].id === +id) {
        if (+id === this.state.nextId - 1)
          this.state.nextId -= 1;
        this.state.products.splice(+i, 1);
        if (this.state.products.length === 0)
          this.state.nextId = 0;
        this.setState(this.state);
        break;
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      nextId: props.products[props.products.length - 1].id + 1
    };
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
              <Route path="/" render={(rprops) => <Products history={rprops.history} products={this.props.products} onDelete={this.DeleteProduct.bind(this)} />} />
              <Route path="/view/:id" render={(rprops) => <ViewEditProduct isEdit={false} match={rprops.match} history={rprops.history} products={this.props.products} />} />
              <Route path="/edit/:id" render={(rprops) => <ViewEditProduct isEdit={true} match={rprops.match} history={rprops.history} products={this.props.products} onSaveProduct={this.saveProduct.bind(this)} />} />
              <Route path="/add" render={(rprops) => <ViewEditProduct isAdd={true} onSaveProduct={this.saveProduct.bind(this)} match={rprops.match} history={rprops.history} products={this.props.products} />} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
