import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import {Label, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';

export default class Product extends Component {
    render(){
        return (
        <div style={{height:'150px'}}>
            <span>{this.props.name}</span>
            <div><h2><Label bsStyle="info">{this.props.price}$</Label></h2></div>
            <p style={{bottom:'0px', left: '0', right:'0', position:'absolute', margin:'0 auto 10px auto'}}>
                <Button onClick={this.props.onView} style={{margin:'0 5px 0 5px'}}>View</Button>
                <Button onClick={this.props.onEdit} style={{margin:'0 5px 0 5px'}}>Edit</Button>
            </p>
        </div>);
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    creationdate: PropTypes.string.isRequired,
    onView: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };