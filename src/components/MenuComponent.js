import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

    function RenderMenuItem({dish}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg height="250px" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle heading style={{fontSize: 25 + 'px'}}><strong>{dish.name}</strong></CardTitle>
                    </CardImgOverlay>
                </Link>
                
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.dishes.map((dish) => {
            return (
                // every element in a list of items requires a key
                <div key={dish.id} className="col-12 col-md-3 mt-1 mb-1">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        if(props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.dishes.errMsg) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMsg}</h4>
                    </div>
                </div>
            );
        }

        else {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row row-content">
                        {menu}
                    </div>
                </div>
            );
        }   
    }
        

export default Menu;