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
    }
    onHide(){
        this.props.history.push('/');
    }
    handleChange(e) {
        //this.setState({ value: e.target.value });
      }
    render(){
        let id = this.props.match.params.id;
        let product;
        for(let i in this.props.products){
            if(this.props.products[+i].id == id)
            {
                product = this.props.products[i];
                break;
            }
        }
        
        return (
            <div>
            <div className="backdrop">
            </div>
            <Modal.Dialog aria-labelledby="ModalHeader" style={{opacity:1}}>
                <Modal.Header closeButton  onHide={()=>this.onHide()}>
                    <Modal.Title>{this.props.isEdit?"Edit product":"View product"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                {
                    this.props.isEdit? (
                        <div style={{'text-align':'left'}}>
                        <FieldGroup id="name" type="text" label="Name" value={product.name} onChange={this.handleChange} placeholder="Enter name" />
                        <FieldGroup id="price" type="text" label="Price" value={product.price} onChange={this.handleChange} placeholder="0.00 $" />
                        <FormGroup controlId="description" >
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" value={product.description} onChange={this.handleChange}></FormControl>
                        </FormGroup>
                        <ControlLabel>Creation date {product.creationdate}</ControlLabel>
                        </div>) :
                        (<div style={{'text-align':'left'}}>
                            <p>
                            <ControlLabel>Name: {product.name}</ControlLabel>
                            </p><p>
                            <ControlLabel>Price: {product.price}$</ControlLabel>
                            </p><p>
                            <ControlLabel>Description: {product.description}</ControlLabel>
                            </p><p>
                            <ControlLabel>Creation date: {product.creationdate}</ControlLabel>
                            </p>
                        </div>)
                }
                </Modal.Body>
                {
                    this.props.isEdit ?
                    (<Modal.Footer>
                        <Button onClick={()=>this.onHide()} >Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>):''
                }
            </Modal.Dialog>
            </div>
            
        );
    }
}

