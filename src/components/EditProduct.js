import React, { Component } from 'react';
import { Modal, Button, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Helpers from '../Helpers';
import 'react-datepicker/dist/react-datepicker.css';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class EditProduct extends Component {
    PropTypes = {
        isAdd: PropTypes.boolean,
        onSaveProduct: PropTypes.func
    }

    onHide() {
        this.props.history.push('/');
    }

    onSave() {
        if (this.state.creationdate instanceof moment)
            this.state.creationdate = this.state.creationdate.format("MM/DD/YYYY");
        if (typeof this.state.price === 'string') {
            let parsed = parseFloat(this.state.price);
            this.state.price = isNaN(parsed) ? '' : parsed;
        }
        this.props.onSaveProduct(this.state);
        this.onHide();
    }

    constructor(props) {
        super(props);
        if (props.isAdd) {
            let product = {
                id: new Helpers().getNextId(props.products),
                name: '',
                description: '',
                price: 0,
                creationdate: moment(new Date())
            }
            this.state = { ...product };
        }
        else {
            for (let i = 0; i < props.products.length; i++) {
                if (props.products[i].id === +props.match.params.id) {
                    let product = props.products[i];
                    this.state = { ...product };
                    break;
                }
            }
        }
    }

    handleNameChange(e) { this.setState({ name: e.target.value }); }

    handlePriceChange(e) {
        let val = e.target.value.trim().replace(',','.');
        if(!/^\d*(\.\d*)?$/.test(val))
            return;
        this.setState({ price: val }); 
    }

    handleDescriptionChange(e) { this.setState({ description: e.target.value }); }

    handleDateChange(e) { this.setState({ creationdate: e.format("MM/DD/YYYY") }); }

    render() {
        return (
            <div>
                <div className="backdrop">
                </div>
                <Modal.Dialog aria-labelledby="ModalHeader" style={{ opacity: 1 }}>
                    <Modal.Header closeButton onHide={() => this.onHide()}>
                        <Modal.Title>{!this.props.isAdd ? "Edit product" : "Add product"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="tal">
                                <FieldGroup id="name" type="text" label="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Enter name" />
                                <FieldGroup id="price" type="text" label="Price" value={this.state.price} onChange={this.handlePriceChange.bind(this)} placeholder="0.00 $" />
                                <FormGroup controlId="description">
                                    <ControlLabel>Description</ControlLabel>
                                    <FormControl componentClass="textarea" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}></FormControl>
                                </FormGroup>
                                <ControlLabel>Creation date</ControlLabel>
                                <DatePicker selected={moment(this.state.creationdate)} onChange={this.handleDateChange.bind(this)} />
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.onHide()}>Close</Button>
                        <Button bsStyle="primary" onClick={() => this.onSave()}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

