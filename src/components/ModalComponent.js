import React  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
class Modal2 extends React.Component {
    constructor(props){
        super(props) 
        this.state={
           moddle: this.props.data.open
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    handleSubmit(){
        return(
            <h1>finish</h1>
        )
    }

render(){
     //console.log(this.props.data.open)
  return (
     
    <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle} >Validate your message</ModalHeader>
        <ModalBody>
        <p>FirstName: {this.props.firstname}</p>
        <p>LastName: {this.props.data.lastname}</p>
        <p>Tel. Number: {this.props.data.telnum}</p>
        <p>Email: {this.props.data.email}</p>
        <p>May be contact you: {JSON.stringify(this.props.data.agree)} 
           and Contact you by {this.props.data.contactType}(if true)</p>
        <p>Message: {this.props.data.message}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }}

export default Modal2;