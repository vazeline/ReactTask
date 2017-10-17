import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Label, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';

export default class Product extends Component {

    render() {
        return (
            <Panel className="col-md-3 col-sm-6 mypanel">
                <div className="buttons-wrapper">
                    <span>{this.props.name}</span>
                    <div><h2><Label bsStyle="info">{this.props.price}$</Label></h2></div>
                    <p className="buttons-container">
                        <Button onClick={this.props.onView} className="action-button">View</Button>
                        <Button onClick={this.props.onEdit} className="action-button">Edit</Button>
                        <Button onClick={this.props.onDelete} className="action-button" bsStyle="danger">Delete</Button>
                    </p>
                </div>
            </Panel>);
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onView: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};