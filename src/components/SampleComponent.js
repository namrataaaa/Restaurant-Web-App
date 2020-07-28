import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
//we have converted the Class DishdetailComponent into three functional Components
//import for the Assignment3
import { Button, Modal, ModalHeader, Col, Row, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

//This is the new component called the CommentForm as part of the Assignment 3
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal= this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil" /> Submit Comment
                </Button>
                <Modal  isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>
                            Rating
                            </Label>
                            <Col md={{ size: 12 }}>
                            <Control.select
                                model=".rating"
                                name="rating"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>
                            Your Name
                            </Label>
                            <Col md={12}>
                            <Control.text
                                model=".author"
                                id="author"
                                name="author"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                required,
                                minLength: minLength(3),
                                maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                required: "Required",
                                minLength: "Must be greater than 2 characters",
                                maxLength: "Must be 15 characters or less"
                                }}
                            />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>
                            Comment
                            </Label>
                            <Col md={12}>
                            <Control.textarea
                                model=".comment"
                                id="comment"
                                name="comment"
                                rows={6}
                                className="form-control"
                            />
                            </Col>
                        </Row>
                        <Button onClick={this.toggleModal} type="submit" value="submit" color="primary">
                            Submit
                        </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
        
    }
}
function RenderComments({comments}) {
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
            <CommentForm></CommentForm>
        </div>
    )
}
function RenderDish({dish}) {
    return (
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

const Dishdetails = (props) =>{
    const dish = props.dish
    if (dish == null) {
        return (<div></div>);
    }
    else{
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
}

export default Dishdetails;