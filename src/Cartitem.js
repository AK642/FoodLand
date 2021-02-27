import React from 'react';
import './scss/Cartitem.scss';
import TomatoPizza from './img/tomato-pizza.png';
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';

function Cartitem({id, image, name, detail, price}) {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="cartitem">
            <div className="item">
                <div className="description">
                    <img src={image} alt="Tomato Pizza"></img>
                    <div className="item__details">
                        <h1 className="item__name">{name}</h1>
                        <span className="item__size">{detail}</span>
                    </div>
                </div>
                
                    <a className="remove" onClick={removeFromBasket}>Remove</a>
                    <span className="item__price">₹{price}</span>
            
            </div>
        </div>
    )
}

export default Cartitem
