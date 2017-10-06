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
        onSaveProduct: PropTypes.func
    }
    onHide(){
        this.props.history.push('/');
    }
    onSave(){
        this.props.onSaveProduct(this.state);
        this.onHide();
    }
    constructor(props){
        super(props);
        let id = props.match.params.id;
        let product;
        for(let i in props.products){
            if(props.products[+i].id == id)
            {
                product = props.products[i];
                this.state = {...product};
                break;
            }
        }
    }
    handleNameChange(e) { this.setState({name:e.target.value}); }
    handlePriceChange(e) { this.setState({price:e.target.value}); }
    handleDescriptionChange(e) { this.setState({description:e.target.value}); }
    render(){
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
                        <FieldGroup id="name" type="text" label="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Enter name" />
                        <FieldGroup id="price" type="text" label="Price" value={this.state.price} onChange={this.handlePriceChange.bind(this)} placeholder="0.00 $" />
                        <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}></FormControl>
                        </FormGroup>
                        <ControlLabel>Creation date {this.state.creationdate}</ControlLabel>
                        </div>) :
                        (<div style={{'text-align':'left'}}>
                            <p>
                            <ControlLabel>Name: {this.state.name}</ControlLabel>
                            </p><p>
                            <ControlLabel>Price: {this.state.price}$</ControlLabel>
                            </p><p>
                            <ControlLabel>Description: {this.state.description}</ControlLabel>
                            </p><p>
                            <ControlLabel>Creation date: {this.state.creationdate}</ControlLabel>
                            </p>
                        </div>)
                }
                </Modal.Body>
                {
                    this.props.isEdit ?
                    (<Modal.Footer>
                        <Button onClick={()=>this.onHide()} >Close</Button>
                        <Button bsStyle="primary" onClick={()=>this.onSave()}>Save changes</Button>
                    </Modal.Footer>):''
                }
            </Modal.Dialog>
            </div>
            
        );
    }
}

