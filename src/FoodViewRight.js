import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import './scss/FoodViewRight.scss';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import firebase from 'firebase';

function FoodViewRight({id, image, name, detail, price}) {

    const [input, setInput] = useState('');
    const [{basket, user}, dispatch] = useStateValue();

    const addReview = (event) => {
        event.preventDefault();

        db.collection('Reviews').add({
            review: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            itemID: id,
            userID: user?.uid,
            userName: user?.email,
            status: 'positive'
        })
        setInput('');
    }

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

    return (
        <div className="foodViewRight">
            <h2>{name}</h2>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h1>₹{price}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat.
            </p>
            <Button className="button" onClick={addToBasket}>
                Add to Cart
            </Button>
            <form>
                <div className="label">
                    <label for="review">Add your Review</label>
                </div>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Review"></input>
                <div className="submit__button">
                    <Button disabled={!input} onClick={addReview} className="button" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FoodViewRight 
