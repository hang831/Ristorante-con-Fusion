import React, { Component } from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Review from './ReviewComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//Main goal: connect main componenet to redux store
const mapStateToProps = state => {
  return { //map state by {props}(redux store state)
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  //receive paramater                              here call the action creator will return the action object for adding comment
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  //redux store
  fetchDishes: () => {dispatch(fetchDishes())}
  });

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

//when mainComponenet was mounted, the fetchDishes will be called
//to fetch dishes and then load it into redux store
  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    
   
    const HomePage = () => {
        return(
            <Home              // reducer the data in dishes
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
             
          />
        ); }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment}
            //can use addComment fcuntion dispatch the action to the store
            />
            ); } 
    
    

    
    return (
      <div>
        <Header />
        
        <TransitionGroup>
             <CSSTransition key={this.props.location.key} classNames="dialog" timeout={750}>
              <Switch location={this.props.location}>
              
            {/* single element above code define*/}
            <Route path='/home' component={HomePage} />

            {/* whole element data pass to LeaderComponent.js*/}
            <Route path='/aboutus' component={() => <About leader={this.props.leaders} />} />
           
            <Route path='/review' component={Review} />

            {/* whole element data pass to MenuComponent.js*/}
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />

             {/* single element above code define*/}
            <Route path='/menu/:dishId' component={DishWithId} />
            
             {/* no element need*/}
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" /> {/*if does not match above any, redirect to home */}
       
            
           </Switch>
          </CSSTransition>
      </TransitionGroup>
          <Footer />
 </div>
    );
  }
}

//connect redux store                 this two function are available in the main
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));