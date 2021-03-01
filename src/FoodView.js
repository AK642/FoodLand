import React, { useEffect, useState } from 'react';
import './scss/FoodView.scss';
import TomatoPizza from './img/tomato-pizza.png';
import { Button, Container } from '@material-ui/core';
import FoodViewLeft from './FoodViewLeft';
import FoodViewRight from './FoodViewRight';
import FoodViewBottom from './FoodViewBottom';
import { useStateValue } from './StateProvider';
import {db} from './firebase';

function FoodView() {

    const [review, setReview] = useState([]);
    // const [{basket, user}, dispatch] = useStateValue();
    const [{ view }, dispatch] = useStateValue()

    useEffect(() => {
        db.collection("Reviews").orderBy('timestamp','desc').onSnapshot(snapshot => {
            setReview(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    return (
        <div className="foodView">
            <Container maxWidth="lg" className="foodView__container">
                <div className="food__detail">
                    <div className="food__image">
                        {
                            view.map(item => (
                                <FoodViewLeft image={item.image}/>
                            ))
                            // <FoodViewLeft />
                        }
                        
                    </div>
                    <div className="detail">
                        {
                            view.map(item => (
                                <FoodViewRight image={item.image} name={item.name} price={item.price} id={item.id} detail={item.detail}/>
                            ))
                            // <FoodViewRight />   
                        }
                    </div>
                </div>
                <div className="food__review">
                    <h1>Reviews</h1>
                    <h3>Positive</h3>
                        
                        {
                            review.map(data => (
                                data.status === "positive" &&
                                (<FoodViewBottom name={data.userName} review={data.review}/>)
                            ))
                        }
                         
                         
                    <h6>Negative</h6>
                        {
                            review.map(data => (
                                data.status === "negative" &&
                                (<FoodViewBottom name={data.userName} review={data.review}/>)
                            ))
                        }
                </div>
            </Container>
        </div>
    )
}

export default FoodView