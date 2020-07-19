import React from 'react';
import ImageGallery from './ImageGalleryComponent'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media,Table   } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css'


function RenderLeader( {leader} ){
    
    return(
        <div className="row ">       
        
        <Media tag="li" >
            
          <Media id="responsive" object src={leader.image} alt={leader.name} style={{paddingRight:"5%"}} />           
            <Media body>
            <Media heading>
                <div className="container" >
            <Media id="responsive_none" object src={leader.image} alt="" />
            </div>
                 {leader.name}
            </Media>
                <p>{leader.designation}  </p>    
                 <p>{leader.description}</p>
            </Media>         
    </Media>
    <br></br>
    </div>
              
    )
}

function About(props) {

    const leaders = props.leader.map((leader) => {
        return (
            <RenderLeader leader={leader} />
        );
    });
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <br></br>
            <br></br>

            <div className="container">
                <h5>Images Gallery</h5>
                <p><strong>You can get in touch with our dishes, menu and decoration style here!</strong></p>
            <ImageGallery  />
            </div>
            <br></br>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded grad">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12 col-xs-12"    >
                    <Media list  >
                        {leaders}
                    </Media>
                </div>
            </div>
        <br></br> <br></br>

         <h2>Facts & Figures</h2>
            <Table striped>           
      <thead>
        <tr className="bg-dark" style={{color:"white"}}>
          <th></th>
          <th>2016</th>
          <th>2018</th>
          <th>2020</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Employees</th>
          <td>30</td>
          <td>75</td>
          <td>110</td>
        </tr>
        <tr>
          <th scope="row">Guests Served</th>
          <td>15,000</td>
          <td>55,000</td>
          <td>130,000</td>
        </tr>
        <tr>
          <th scope="row">Special Events</th>
          <td>5</td>
          <td>12</td>
          <td>17</td>
        </tr>
        <tr>
          <th scope="row">Annual Turnover</th>
          <td>$479,145</td>
          <td>$1,990,525</td>
          <td>~$4,000,000</td>
        </tr>
      </tbody>
    </Table>
    <br></br>
        </div>
    );
}

export default About;    