import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
    
    function RenderComments({comments}) {

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
        }
        return (
            <div className="col-12 col-md-6 m-1">
                <h4 pt-2>Comments</h4>
                <ul className="list-unstyled p-1">
                    {listItem}
                </ul>
            </div>
        );

    }

    function RenderDish({dish}) {

        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );

    }

    const DishDetails = (props) => {

        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>);
        } else {
            return (
                <div></div>
            );
        }
    }


export default DishDetails;