import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
        function RenderMenuItem( {dish, onClick} ) { //props =>destructing {dish, onClick}
            return(   
                            
                <Card>
                    <Link to={`/menu/${dish.id}`} >  
                    <CardImg  width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link> 
                </Card>
            );
        }

        const Menu = (props) => {      //Menu function  
        const menu = props.dishes.dishes.map( (dish) => {
            return (  
               <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish}  /> 
               </div>
            );
            });

            if(props.dishes.isLoading){
                return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.dishes.errMess) {
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
        else
           
       return ( 
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>

        </div> 
        <div style={{textAlign:"center"}}><h3>Hot Dishes Top 4</h3></div>
        <div className="row">    
            {menu}
        </div>
        <br></br>

        <div className="col-12 ml-auto mr-auto">
                    <Card>
                        <CardBody className="bg-faded grad2 text-light">
                            <blockquote className="blockquote">
                                <p className="mb-0">You may contact us for getting a complete menu.</p>
                                <footer className="blockquote-footer text-light "><strong>You are welcome to visit our reasturant too!</strong>
                                
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

           <br></br>
           {/* http://banffbamboo.com/BambooWeb_files/Page754.htm */}
        <div className="container bg-dark text-light" >
            <br></br> <br></br>
            <h1>Season Menu (11:30am — 10pm)</h1>
            <br></br>
            No matter the occasion or location, We hit the spot. Ristorante con Fusion is your best choice!
            <br></br>
            <br></br>
            <hr style={{border: "1px solid grey"}}></hr>
            <h2>APPETIZERS</h2>
            <hr style={{border: "1px solid grey"}}></hr>
            <br></br>

            <h5><span className="fa fa-star text-warning"></span> Zucchipakoda................................................$15</h5>
            <p>Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce</p>
            <br></br>

            <h5><FontAwesomeIcon icon={faPepperHot} className="text-danger" /> Golden Dynamite Rolls................................................$9</h5>
            <p>A house creation, crispy fried rolls stuffed with prawn and crab meat,
            served with Thai sweet & chili sauce, a must try</p>
            <br></br>

            <h5>Pandan Chicken................................................$13</h5>
            <p>Marinated chicken wrapped with pandan leaves, crispy fried and
                served with sweet soya sauce, a traditional Thai appertizer</p>

            <br></br> 
            
            
             <h5>Shrimp Toast................................................$10</h5>
            <p>Crispy toast topped with shrimp and herbs</p>
            <br></br>

             <h5><span className="fa fa-envira text-success"></span> Golden Pocket................................................$10</h5>
            <p>Japanese style golden fried vegetarian steak balls with a sweet purple yam filling</p>
            <br></br>
            <br></br>
            <hr style={{border: "1px solid grey"}}></hr>
            <h2>MAINS</h2>
            <hr style={{border: "1px solid grey"}}></hr>
            <br></br>

            <h5><span className="fa fa-star text-warning"></span> Uthappizza................................................$18</h5>
            <p>A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>
            <br></br>

            <h5><span className="fa fa-star text-warning"></span> Vadonut................................................$17</h5>
            <p>A quintessential ConFusion experience, is it a vada or is it a donut?</p>
            <br></br>

            <h5>Seafood in coconut and lime sauce................................................$22</h5>
            <p>Seafood with fresh lime and coconut juice</p>
            <br></br>

            <h5><FontAwesomeIcon icon={faPepperHot} className="text-danger" /> Beef Stew in Vietnamese curry................................................$25</h5>
            <p>One of the popular hot pot dishes, beef stew prepared with yellow curry</p>
            <br></br>

            <h5><FontAwesomeIcon icon={faPepperHot} className="text-danger" /> Thai Roasted Chicken <span style={{ fontWeight: "lighter", fontSize:15}}>(half chicken)</span>................................................$15</h5>
            <p>Half bone-in chicken marinated in Thai spice, slowly roasted in oven</p>
            <br></br>

            <h5><span className="fa fa-envira text-success"></span> Mushrooms with Snowpeas in Korean soya sauce................................................$14</h5>
            <p>mixed mushroom and snowpeas stir fried with Korean soya sauce</p>
            <br></br>

            <h5><span className="fa fa-envira text-success"></span> Ginger sauce <span style={{ fontWeight: "lighter", fontSize:15}}>(Pad Khing)</span> with Tofu................................................$12</h5>
            <p>Crispy tofu prepared with housemade ginger sauce, one of our favorites</p>

            <br></br>
            <br></br>
            <hr style={{border: "1px solid grey"}}></hr>
            <h2>DESSERTS</h2>
            <hr style={{border: "1px solid grey"}}></hr>
            <br></br>

            <h5><span className="fa fa-star text-warning"></span> ElaiCheese Cake................................................$12</h5>
            <p>A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.</p>
            <br></br>

            <h5>Crispy Banana ................................................$8</h5>
            <p>Deep fired banana served with vanilla ice cream</p>
            <br></br>

            <h5>Deep Fried Ice Cream with nectarous................................................$12</h5>
            <p>Grilling caramelizes the sugars in the fruit for a light treat that is delicious on its own or served with low-fat vanilla ice cream.</p>
            <br></br>

            <h5><span className=" fa fa-clock-o text-primary"></span> Warm Apple-Buttermilk Custard Pie ( make-to-order )................................................$14</h5>
            <p>Warm, cinnamon apples combine with a creamy custard for a fun twist on apple pie. The key to both a flaky piecrust and crisp streusel topping is to keep them as cold as possible before putting them into the oven</p>
            <br></br>
        </div>
        <br></br>
    </div>
       );
        }
       
   


export default Menu;