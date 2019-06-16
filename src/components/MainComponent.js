import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishDetailComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import Contact from '../components/ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }


  render(){

    const HomePage = () => {
        return(
            <Home   dish={this.state.dishes.filter(dish => dish.featured)[0]} 
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    leader={this.state.leaders.filter(leader => leader.featured)[0]} />
        )
    }
    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
            <Route exact path="/contactus" component={Contact}/>
            <Redirect to="/home" />
        </Switch>
        <DishDetail dish={this.state.dishes.filter( dish => dish.id===this.state.selectedDish)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
