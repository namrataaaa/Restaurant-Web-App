import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderComments(comments) {

        if (comments != null) {
            const listItem = comments.map(comment => {
                return (
                    <li key={comment.id}>{comment.comment}<br />
                        <em>{'-- ' + comment.author}</em>
                        {',  ' + comment.date.toString().substring(0, 10)}<br /><br /></li>
                );
            });
        } else {
            return <li></li>;
        }

    }

    renderDish(dish) {
        const comments = dish.comments;
        let listItem = <li></li>;
        if (comments != null) {
            listItem = comments.map(comment => {
                return (
                    <li key={comment.id}>{comment.comment}<br />
                        <em>{'-- ' + comment.author}</em>
                        {',  '} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                            .format(new Date(Date.parse(comment.date)))}<br /><br /></li>
                );
            });
        } else {
            return listItem;
        }
        return (
            <div className="container">
                <div className="row">
                    <Card className="col-12 col-md-5 m-3">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <div className="col-12 col-md-6 m-2">
                        <h4>Comments</h4>
                        <ul className="list-unstyled p-1">
                            {listItem}
                        </ul>
                    </div>
                </div>
            </div>
        );

    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                this.renderDish(dish)
            );
        } else {
            return (
                <div></div>
            );
        }

    }

}

export default DishDetails;