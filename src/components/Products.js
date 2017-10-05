import React,{Component} from 'react';
import Product from './Product';
import {PanelGroup,Panel} from 'react-bootstrap';

export default class Products extends Component{
    render(){
        const prods = this.props.products
        const prodComponents = prods.map((prod, index)=>
            <Panel className="col-md-3 col-sm-6 mypanel">
            <Product 
                index={index} 
                name={prod.name} 
                price={prod.price}
                key={prod.id}
                description={prod.description}
                creationdate={prod.creationdate}
                onView={this.props.onView}
                onEdit={this.props.onEdit}
                />
            </Panel> 
        );
    return (<PanelGroup> { prodComponents } </PanelGroup>);
    }
}