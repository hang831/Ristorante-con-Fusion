import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
   } from 'reactstrap';
import {Loading} from './LoadingComponent';
import AOS from 'aos';
import CarouselSlide from './CarouselSlideComponent';
import BookingForm from './BookingFormComponent';
import '../index.css'
import "aos/dist/aos.css"

function RenderCard({item, isLoading, errMess}) {
        if (isLoading){
            return(
                <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }
        else
            return( 
               <div>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>                    
                </div>
            );
}

  
function Home(props) {
    AOS.init({
        // initialise with other settings
        duration : 2000
      });

    return(
        <div className="container" data-aos="zoom-in">
          <h1 style={{textAlign:"center"}}>  Featured News </h1>
                <div className="bg" style={{fontFamily: "Impact"}}>
                <CarouselSlide  />
         </div>
         <hr></hr>
            <br></br>
            <div className="row align-items-start mt-5" data-aos="zoom-in">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading}  
                    errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <BookingForm />
        </div>
    );
}



export default Home;