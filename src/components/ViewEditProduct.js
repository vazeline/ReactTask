import React,{Component} from 'react';
import {Modal, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {PropTypes} from 'prop-types';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

export default class ViewEditProduct extends Component{
    PropTypes = {
        isEdit: PropTypes.boolean,
        visible: PropTypes.boolean,
        onHide: PropTypes.func.isRequired,
        //: PropTypes.
    }
    handleChange(e) {
        //this.setState({ value: e.target.value });
      }
    render(){
        if(!this.props.visible)
            return null;
        return (
            <div>
            <div className="backdrop">
            </div>
            <Modal.Dialog aria-labelledby="ModalHeader" style={{opacity:1}}>
                <Modal.Header closeButton  onHide={this.props.onHide}>
                    <Modal.Title>{this.props.isEdit?"Edit product":"View product"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                {
                    this.props.isEdit? (
                        <div style={{'text-align':'left'}}>
                        <FieldGroup id="name" type="text" label="Name" value={''} onChange={this.handleChange} placeholder="Enter name" />
                        <FieldGroup id="price" type="text" label="Price" value={''} onChange={this.handleChange} placeholder="0.00 $" />
                        <FormGroup controlId="description" >
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" value={''} onChange={this.handleChange}></FormControl>
                        </FormGroup>
                        <ControlLabel>Creation date {''}</ControlLabel>
                        </div>) :
                        (<div style={{'text-align':'left'}}>
                            <p>
                            <ControlLabel>Name: {''}</ControlLabel>
                            </p><p>
                            <ControlLabel>Price: {''}$</ControlLabel>
                            </p><p>
                            <ControlLabel>Description: {''}</ControlLabel>
                            </p><p>
                            <ControlLabel>Creation date: {''}</ControlLabel>
                            </p>
                        </div>)
                }
                </Modal.Body>
                {
                    this.props.isEdit ?
                    (<Modal.Footer>
                        <Button onClick={this.props.onHide} >Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>):''
                }
            </Modal.Dialog>
            </div>
            
        );
    }
}

