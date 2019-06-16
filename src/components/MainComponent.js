import React, { Component } from 'react';


import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishDetailComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }


  onDishSelect(dishId){
    this.setState({
        selectedDish: dishId
    })
    }

  render(){
    return (
      <div>
        <Header></Header>
        <div className="container">
            <div className="row">
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
            </div>
        </div>
        <DishDetail dish={this.state.dishes.filter( dish => dish.id===this.state.selectedDish)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
