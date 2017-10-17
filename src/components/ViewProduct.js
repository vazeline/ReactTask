import React, { Component } from 'react';
import { Modal, ControlLabel } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default class ViewProduct extends Component {

    onHide() { this.props.history.push('/'); }

    constructor(props) {
        super(props);
        for (let i = 0; i < props.products.length; i++) {
            if (props.products[i].id === +props.match.params.id) {
                let product = props.products[i];
                this.state = { ...product };
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <div className="backdrop">
                </div>
                <Modal.Dialog aria-labelledby="ModalHeader" style={{ opacity: 1 }}>
                    <Modal.Header closeButton onHide={() => this.onHide()}>
                        <Modal.Title>View product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="tal">
                            <p>
                                <ControlLabel>Name: {this.state.name}</ControlLabel>
                            </p><p>
                                <ControlLabel>Price: {this.state.price}$</ControlLabel>
                            </p><p>
                                <ControlLabel>Description: {this.state.description}</ControlLabel>
                            </p><p>
                                <ControlLabel>Creation date: {this.state.creationdate}</ControlLabel>
                            </p>
                        </div>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }
}

