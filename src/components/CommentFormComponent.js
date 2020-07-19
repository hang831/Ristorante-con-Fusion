import React from 'react';
import {Alert, Button,Modal, ModalHeader, ModalBody,  Row, Col, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        show: false
      };

      this.RenderComments  = this.RenderComments.bind(this);
      this.handleSubmit  = this.handleSubmit.bind(this);
      this.alert = this.alert.bind(this);
    }

    
    RenderComments (){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }

      handleSubmit(values) {           
        
        if(values.comment !== '') 
        this.setState(prevState => ({
            isModalOpen: !this.state.isModalOpen,
            show: !prevState.show
        })); 
         this.alert();
         setTimeout(() => { 
             this.props.addComment(this.props.dishId,values.rating, values.author, values.comment)
            }, 5000);   
    }

    alert(){       
        if(this.state.show)
       return(
        <Alert color='success'>
        Your comment will be posted after our review. Thank!
      </Alert> 
       )
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

  
    
  
    render() {
        return(
            <div>
             {this.alert()}   {/*Function: Show Alert if submit successfully */}
            <Button  onClick={this.RenderComments}>
             <span className="fa fa-pencil"></span> Submit Comment </Button>

             
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader  toggle={this.RenderComments}>Submit Comment</ModalHeader>
            
            <ModalBody>
            <stong style={{color:"red"}}>You must LogIn for saving your comment</stong>
            
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <br></br>
                            <Label htmlFor="rating">Rating</Label>
                            <Row className="form-group">
                                <Col>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Label htmlFor="author">Your Name</Label>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            maxLength: 'Must be 15 characters or less'
                                        }}  />            
                                </Col>
                            </Row>

                            <Label htmlFor="comment">Comment</Label>
                            <Row className="form-group">
                                <Col >
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(10)
                                        }} />
                                         <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 10 characters',        
                                        }}  />
                                     
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Preview
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
            </ModalBody>
            </Modal>
            </div>
        )
    }
}
export default CommentForm 