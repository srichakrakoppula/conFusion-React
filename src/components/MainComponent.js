import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishDetailComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    }
  }


  render(){

    const HomePage = function(){
        return(
            <Home/>
        )
    }
    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
            <Redirect to="/home" />
        </Switch>
        <DishDetail dish={this.state.dishes.filter( dish => dish.id===this.state.selectedDish)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
