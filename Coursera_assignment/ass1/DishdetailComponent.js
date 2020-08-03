import React, { Component }  from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../index.css'
class DishDetail extends Component {

    renderDish(dish) {  
        dish =this.props.dish ;
            return(  
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>       
            );
            }
    

    renderComments(comments){
 
         if (comments != null)
         return( 
            <div className="col-12 col-md-5 m-1">
                <h4>Comment</h4>{
                    comments.map( (comment) =>{  
                        const date= new Date( comment.date )
                        var options = {  year: 'numeric', month: 'short', day: '2-digit' };
    
                      return (
                         <ul className="list-unstyled inline" key={comment.id}>
                            <li>{comment.comment}</li>
                           <br></br>
                            <li>--{comment.author} , {date.toLocaleDateString('en-US', options)}</li>
                        </ul>
                )
           })
        }
        </div>
         )     
    else
        return(
            <div></div>
              ); 
    }
   

    render(){ 
        
        if(this.props.dish !=null)
        return (
            <div className="container">
            <div className="row">
               {this.renderDish(this.props.dish)}  
               {this.renderComments(this.props.dish.comments)}             
            </div>    
            </div>    
        ) 
        else   
        return(
            <div></div>
        )
    }  
}

export default DishDetail