import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

    function RenderMenuItem({dish, onClick}) {
        return (
            <Card onClick={() => onClick(dish.id)}>
                <CardImg height="250px" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading style={{fontSize: 25 + 'px'}}><strong>{dish.name}</strong></CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                // every element in a list of items requires a key
                <div key={dish.id} className="col-12 col-md-3 mt-1 mb-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
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
        

export default Menu;