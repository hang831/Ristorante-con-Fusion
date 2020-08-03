import React, { Component } from 'react';

import Header from './HeaderComponent'
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent'


import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }

  

  render() {
    const HomePage = () => {
        return(
            <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
        ); }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      ); } 
    
    

      
    return (
      <div>
        <Header />
        <Switch>
            {/* single element above code define*/}
            <Route path='/home' component={HomePage} /> 

            {/* whole element data pass to LeaderComponent.js*/}
            <Route path='/aboutus' component={() => <About leader={this.state.leaders} />} />
            {/* whole element data pass to MenuComponent.js*/}
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />

             {/* single element above code define*/}
            <Route path='/menu/:dishId' component={DishWithId} />
            
             {/* no element need*/}
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" /> {/*if does not match above any, redirect to home */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;