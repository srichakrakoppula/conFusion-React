import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h2>Comments</h2>
                        <ul className="list-unstyled">
                            {this.renderComments(dish.comments)}
                        </ul>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    renderComments(comments){
        if(comments != null){
            return comments.map(comment => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {comment.date}</p>
                        </li>
                    )
                })
        }else{
            return(
                <div></div>
            )
        }
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        )
    }

}

export default DishDetailComponent;