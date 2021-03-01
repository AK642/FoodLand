import React, {useState} from 'react';
import './scss/Fooditem.scss';
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Fooditem({id, image, name, detail, price}) {

    const [{ basket, view }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                name: name,
                detail: detail,
                price: price
            }
        })
    }

    const viewDetail = () => {
        dispatch({
            type: "VIEW_DETAIL",
            item: {
                id: id,
                image: image,
                name: name,
                detail: detail,
                price: price
            }
        })
    }

    return (
        <div className="fooditem">                
            <div className="card">
                <div className="item__image">
                    <Link to="/food" onClick={viewDetail} className="image__link"><img src={image} alt="Food Image"></img></Link>    
                </div> 
                <div className="item__details">
                    <h2>{name}</h2>
                    <span className="size">{detail}</span>
                    <div className="item__price">
                        <span className="price">₹{price}</span>
                        <Button className="add_to_cart" onClick={addToBasket}>
                            <span className="plus">+</span>
                            <span>Add</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fooditem
