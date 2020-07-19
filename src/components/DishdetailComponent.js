import React from 'react';
import CommentForm from './CommentFormComponent'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Loading } from './LoadingComponent'
import '../index.css'

  function RenderDish({dish}) {  
            return(     
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg  src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>        
            );
       }
    

         function RenderComments({comments, addComment, dishId}){                   
                 if (comments!=null)              
                 return(        
                    <div className="col-12 col-md-5 m-1">      
                        <h4>Comment</h4>{
                             
                            comments.map( (comment) =>{  
                                const date= new Date( comment.date )
                                var options = {  year: 'numeric', month: 'short', day: '2-digit' };
            
                              return ( 
                                 <ul className="list-unstyled inline" key={comment.id}>
                                    <li>{comment.comment}</li>
                                    <li>--{comment.author} , {date.toLocaleDateString('en-US', options)}</li>
                                    <br></br>
                                </ul>
                         );
                   }) }
               <CommentForm dishId={dishId} addComment={addComment} />                  
                </div>
                 )  ;   
            else
                return(
                    <div></div>
                      ); 
            }
        

   

    const DishDetail = (props) =>{
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish !=null)
        return (
            <div className="container">
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
                <RenderDish dish={props.dish} />   
               
                <RenderComments         
                        comments={props.comments} 
                        addComment={props.addComment}
                        dishId={props.dish.id} 
                        /> 
                  </div> 
                         
              
            </div>    
        ) 
        else   
        return(
            <div></div>
        )
    }
       
       
   

export default DishDetail