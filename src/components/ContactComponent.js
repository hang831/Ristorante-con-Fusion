import React, {Component } from 'react';
import { Alert,Breadcrumb, BreadcrumbItem,  Button, Form, FormGroup, Label, Input, Col, FormFeedback,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
// use redux form: https://www.coursera.org/learn/front-end-react/lecture/UINvH/exercise-video-react-redux-form-revisited

class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                message: false
            },
            modal: false,
            nestedModal: false,
            closeAll: false,
            show: false

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll  = this.toggleAll.bind(this);
        this.alert = this.alert.bind(this);
        

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault(); //to prevent redirect other page after submit
        if(this.state.firstname ==='' ||this.state.lastname ==='' ||this.state.telnum ===''
                ||this.state.email ==='' ||this.state.message ==='')
       
        setTimeout(() => {
        this.setState({ show: true});
        }, 500);
         this.alert(); //after change state to true call alert function 
        //alert('Current State is: ' + JSON.stringify(this.state));   
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.show) {
          // when the state is updated (turned red), 
          // a timeout is triggered to switch it back off
          this.turnOffAlertTimeout = setTimeout(() => { 
            this.setState(() => ({show: false}))
          }, 3000);
        }
      }

      componentWillUnmount() {
        // we set the timeout to this.turnOffAlertTimeout so that we can
        // clean it up when the component is unmounted.
        // otherwise you could get your app trying to modify the state on an
        // unmounted component, which will throw an error
        clearTimeout(this.turnOffAlertTimeout);
      }

        alert(){    
            if(this.state.show === true)
           return(
            <Alert color="danger">
            Please fill in all field before submitting the form.
           </Alert> 
           )      
        }
   
        toggle() { //modal
           if(this.state.firstname ==='' ||this.state.lastname ==='' ||this.state.telnum ===''
           ||this.state.email ==='' ||this.state.message ===''){
               return
           }else{
            this.setState(prevState => ({
                modal: !prevState.modal
              }));
           }
          }

          toggleNested() { //nestmodal
            this.setState(prevState => ({
                nestedModal: !prevState.nestedModal,
                closeAll: false,
                
              }));
          }

          toggleAll() { //nestmodal
            this.setState(prevState => ({
                nestedModal: !prevState.nestedModal,
                closeAll: true
              }));
              window.location.reload(true); //javascript reload the page after click exit
          }
  

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
    }

    validate(firstname, lastname, telnum, email, message) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            message: ''
        };
        
        if(this.state.touched.firstname && firstname.length < 3) //here is a shortcut for ===true, it is default a boolean check
        errors.firstname = "First Name should be Equal or More than 3 characters";
        else if(this.state.touched.firstname && firstname.length > 13)
        errors.firstname = "First Name should be Equal or Less than 13 characters";

        if(this.state.touched.lastname && lastname.length < 3)
        errors.lastname = "First Name should be Equal or More than 3 characters";
        else if(this.state.touched.lastname && lastname.length > 13)
        errors.lastname = "Last Name should be Equal or Less than 13 characters";

        const reg = /^\d+$/; //mean all char must be number
        if(this.state.touched.telnum && !reg.test(telnum)) //give a string return a boolean
        errors.telnum = "Tel. Number should contain only numbers";

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !==1) //split = check each character
        errors.email = "Email should contain at least one '@' characters";
        else if(this.state.touched.email && email.split('').filter(x => x === '.').length !==1)
        errors.email = "Email should contain a '.' characters";

        if(this.state.touched.message && message.length < 10)
        errors.message = "The Message should be Equal or More than 10 characters";

        return errors;
    }
 
    render(){ 
       const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email, this.state.message,)   
         // console.log(this.state.show)          //debug for alert state    
         // console.log(this.state.nestedModal)   //debug for nested modal   
         //console.log(this.state.closeAll) //debug for nested modal
       return(
        <div className="container">
            <div className="row">
                
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>  
                <div className="col-12">
                <h3 style={{textAlign:"center"}}>Location Information</h3>
                
                </div>
                <div className="col-12 col-sm-4 offset-sm-1" style={{fontSize: 25}}>
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>

                        <br></br>
                            <div className="col-12 col-sm-11 offset-ms-1">                                                     
                            <div className="btn-group" role="group">                          
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"    href="#!"><i  className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                            
                        </div>
                        <br></br>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                
                    <h5>Map of our Location</h5>
                    <iframe title="google map" src="https://www.google.com/maps/d/embed?mid=1epUd3vFIrzLJHSgy4YyWZAuXryaT5pWp" width="100%" height="100%"></iframe>
                </div>
            </div>
            <br></br>
            
            
            <div className="row row-content">
            
                <div className="col-12">
                <hr></hr>
                    <h3>Send us your Feedback</h3>
                </div>
               
            <div className="col-12 col-md-9">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
   {/* medium to extra large screen size of this label will occupy two columns in this row */}
                        <Label htmlFor="firstname" md={2}>First Name</Label>{/* for will known at loop, so use htmlFor  */} 
                        <Col md={10}> {/* = div col-md10  */}
                            <Input type="text" id="firstname" name="firstname" 
                                   placeholder="First Name" 
                                   value={this.state.firstname}
                                   valid={errors.firstname === ''}
                                   invalid={errors.firstname !== ''}
                                   onBlur={this.handleBlur('firstname')} //when mouse not focus on this element will call
                                   onChange={this.handleInputChange}  />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Input type="text" id="lastname" name="lastname"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                valid={errors.lastname === ''}
                                invalid={errors.lastname !== ''}
                                onBlur={this.handleBlur('lastname')}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.lastname}</FormFeedback>    
                        </Col>                        
                    </FormGroup>

                    <FormGroup row>
                    <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"
                                value={this.state.telnum}
                                valid={errors.telnum === ''}
                                invalid={errors.telnum !== ''}
                                onBlur={this.handleBlur('telnum')}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.telnum}</FormFeedback>    
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                                onChange={this.handleInputChange} />
                             <FormFeedback>{errors.email}</FormFeedback>   
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                value={this.state.message}
                                valid={errors.message === ''}
                                invalid={errors.message !== ''}
                                onBlur={this.handleBlur('message')}
                                onChange={this.handleInputChange}></Input>
                            <FormFeedback>{errors.message}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange} /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <div>
                    {this.alert()}  {/* Call a Alert if user type nothing*/}
                    </div>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 2}}> {/* offset = paddingRight*/}
                        <Button type="submit" color="primary" onClick={this.toggle}>Submit</Button>
                           
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Review your message beofre submission</ModalHeader>
                            <ModalBody>
                                <p>FirstName: {this.state.firstname}</p>
                                <p>LastName: {this.state.lastname}</p>
                                <p>Tel. Number: {this.state.telnum}</p>
                                <p>Email: {this.state.email}</p>
                                <p>May be contact you: "{JSON.stringify(this.state.agree)}" 
                                   and Contact you by {this.state.contactType} (if allowed)</p>
                                <p>Message: {this.state.message}</p>
                            </ModalBody>
                            <ModalFooter>
                                {/*============================================== */}
                            <Button color="success" onClick={this.toggleNested}>Submit</Button>
                            
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} backdrop='static' onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Thank You!</ModalHeader>
                                <ModalBody>Success! You message was sent. We will contact you as fast as possible.</ModalBody>
                                <ModalFooter>
                                
                                <Button outline color="success" onClick={this.toggleAll}>Exit</Button>
                                </ModalFooter>
                            </Modal>
                                {/*============================================== */}
                                
                                <Button onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                            </Modal>
                        </Col>
                    </FormGroup>
                   
                </Form>
            </div>
        </div>
    </div>
    );
    }
}

export default Contact;