import React, {Component } from 'react';
import { Alert, Form, FormGroup, Label, Input, Button }from 'reactstrap';
import '../index.css'

class BookingForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: 'block',
            show2: 'block'
          };
          this.handleDismiss = this.handleDismiss.bind(this);
          this.handleDismiss2 = this.handleDismiss2.bind(this);
    }

    handleDismiss(){
        this.setState({ show: 'none' });
      }
      handleDismiss2(){
        this.setState({ show2: 'none' });
      }      
      
        render(){
            const show = this.state.show
            const show2 = this.state.show2
            return(
                <div className="container booking" style={{paddingTop:"2%"}}>
                    <div className="row no-gutters ">
                    <div className="col-12">
                    <h3 align="center" className="shadow-lg p-3 mb-5 bg-warning rounded" style={{width:"100%"}} >Reserve a Table</h3>
                    </div>
                    
                    <Form onSubmit={this.handleSubmit}>

                    <FormGroup row >
                      <div className=" col-12 offset-2 mt-3">
                    <Label><h5 className="bg-warning ">Number of Guests</h5></Label>
                    <div className="inline">
                            <FormGroup check inline className="bg-warning">
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                 1
                              </Label>
                            </FormGroup>
                            <FormGroup check inline className="bg-warning">
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                 2
                              </Label>
                            </FormGroup>
                            <FormGroup check inline className="bg-warning ">
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                 3
                              </Label>
                            </FormGroup>
                            <FormGroup check inline className="bg-warning ">
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                 4
                              </Label>
                            </FormGroup>
                            <FormGroup check inline className="bg-warning">
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                 5
                              </Label>
                            </FormGroup>
                            <FormGroup check inline className="bg-warning ">
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                 6
                              </Label>
                            </FormGroup>                   
                            </div>
                           </div>          
                   
                      <div className=" col-12 offset-4 mt-3">
                           <Label><h5 className="bg-warning">Date</h5></Label>   
                            <FormGroup  inline>
                              <Label >
                                <Input type="date" name="radio1" />{' '}
                              </Label>
                            </FormGroup>
                            </div>

                            <div className=" col-12 offset-6 ">
                            <Label><h5 className="bg-warning ">Time</h5></Label>   
                            <FormGroup  inline>
                              <Label >
                                <Input type="time" name="radio1" id="time" />{' '}
                              </Label>
                            </FormGroup>
                            </div>
                            </FormGroup>
                    </Form>
                    
                    <div> 
                        
      <Alert style={{display: show }} variant="success">
        
        <p>
        <strong>Reminder:</strong>: Please <a href="tel:+12345678">call</a> us to reserve for more than six guests.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={this.handleDismiss} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>    
      
      <Alert style={{display: show2 }}   color="danger">     
        <p>
        <strong>Warning:</strong>: Please Login To Continue
        </p>
        <p>You may try to contact us by other method.</p>
        <hr/>
        <div className="d-flex justify-content-end">
          <Button onClick={this.handleDismiss2} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert> 

         </div>   
         </div>
    </div>
                                   
            )
        }
}

export default BookingForm