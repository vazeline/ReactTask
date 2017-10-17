import React, { Component } from 'react';
import Product from './Product';
import { PanelGroup, Button } from 'react-bootstrap';

export default class Products extends Component {

    render() {
        const prodComponents = this.props.products.map((prod, index) =>
            <Product
                name={prod.name}
                price={prod.price}
                key={prod.id}
                onView={() => { this.props.history.push("/view/" + prod.id); }}
                onEdit={() => { this.props.history.push('/edit/' + prod.id); }}
                onDelete={() => { this.props.onDelete(prod.id); }}
            />);
        return (<PanelGroup>
            <p><Button bsStyle="success" onClick={() => { this.props.history.push('/add'); }}>Add Product</Button></p>
            {prodComponents}
        </PanelGroup>);
    }
}
