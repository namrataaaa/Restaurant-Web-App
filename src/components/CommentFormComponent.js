import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Row, Modal, ModalBody, ModalHeader } from 'reactstrap';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal()
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal} className="mb-3" >
                    <span className="fa fa-pencil"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="col-12">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="select">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row >
                                <Row className="form-group" >
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" id="name" name="name" placeholder="Enter Your Name"
                                    className="form-control" 
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be less than 15 characters'
                                        }}    
                                    />
                                </Row >
                                <Row className="form-group" >
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" className="form-control" id="comment"
                                        name="comment" rows="6" />
                                </Row>
                                <Row className="form-group" >
                                    <Button type="submit" color="primary" >
                                        Submit
                                    </Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentForm;