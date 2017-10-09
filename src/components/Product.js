import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Label, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {Panel} from 'react-bootstrap';

export default class Product extends Component {
    render() {
        return (
            <Panel className="col-md-3 col-sm-6 mypanel">
                <div style={{ height: '150px' }}>
                    <span>{this.props.name}</span>
                    <div><h2><Label bsStyle="info">{this.props.price}$</Label></h2></div>
                    <p style={{ bottom: '0px', left: '0', right: '0', position: 'absolute', margin: '0 auto 10px auto' }}>
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
    index: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    creationdate: PropTypes.string.isRequired,
    onView: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};