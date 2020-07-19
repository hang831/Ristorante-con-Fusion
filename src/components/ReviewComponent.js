import React from 'react'
import '../Grid.css'
import { Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';

function Review(){
    return(
          
    <div className="container">
      <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Review</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Review</h3>
                    <hr />
                </div>                
            </div>
    <br></br>
     <div className="test">  
    <div className="bgImg">
        <h2>Let See SomeBody reviews...</h2>
      </div>

      <div className="bgImg">
        <h3>“UTTERLY SCRUMPTIOUS. WORTH EVERY CALORIE. DIET CAN START TOMORROW!”</h3>
        <p>Woman’s Wellbeing Magazine</p>
      </div>
      <div className="dishImage">
          <img src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=175" alt="" />
      </div>

      <div className="dishImage">
      <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=175" alt="" />
      </div>
      <div className="bgImg">
        <h3>“THE MOST DELICIOUS TAPAS I’VE EVER TRIED”</h3>
        <p>The Taster’s Times</p>
      </div>

      <div className="bgImg">
        <h3>"ALL AGREED THAT THE FOOD WAS EXCELLENT AND WE CONTINUE TO BELIEVE THAT THIS IS THE BEST STEAK WE HAVE TASTED."</h3>
        <p>Food Lover's Bible</p>
      </div>
      <div className="dishImage">
          <img src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=140" alt="" />
      </div>
    </div>
        <br></br>
    <div className="test2">
    
    <div className="dishImage">
        <img src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=160" alt="" />
    </div>
        <div className="bgImg2">
            <h3>"I’VE FALLEN IN LOVE! WITH A SLICE OF CHORIZO!"</h3>
            <p>The Times News Foods</p>
        </div>

      <div className="bgImg2">
            <h3>“A GENUINE TAPAS RESTAURANT WITH A MODERN TWIST. FANTASTIC FOOD CAN’T STOP TO EAT.”</h3>
        <p>The National Crazy Food Society</p>
      </div>
      <div className="dishImage">
          <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=160" alt="" />
      </div>

      <div className="dishImage">
        <img src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=155" alt="" />
    </div>
        <div className="bgImg2">
            <h3>““OH OH OH! MELT-IN-THE-MOUTH FOOD.””</h3>
            <p>The Daily Munch</p>
        </div>

        <div className="bgImg2">
        <h3>GOOD RANGE OF PIZZAS THAT ARE FRESHLY COOKED AND NOT TOO FILLING AS SOME CAN BE.</h3>
        <p>Yummy Daillys</p>
      </div>
      <div className="dishImage">
          <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=140" alt="" />
      </div>

    </div>
    <br></br>
    </div> 
    )
}

export default Review