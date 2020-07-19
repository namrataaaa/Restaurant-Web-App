import React, { Component } from 'react';
import DishDetails from './DishDetailsComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() { // corresponding view for the component
        const fontsize = 25;
        const menu = this.props.dishes.map((dish) => {
            return (
                // every element in a list of items requires a key
                <div key={dish.id} className="col-12 col-md-3 mt-1 mb-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg height="250px" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading style={{fontSize: fontsize + 'px'}}><strong>{dish.name}</strong></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;