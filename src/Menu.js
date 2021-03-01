import { Container } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './scss/Menu.scss';
import { db } from './firebase';
import Fooditem from './Fooditem';

function Menu() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        db.collection("FoodItems").onSnapshot(snapshot => {
            setItems(snapshot.docs.map(doc => doc.data()));
        })
    },[])

    return (
        <div className="menu">
            <Container maxWidth="lg" className="menu__content">
                <h1>All Items</h1>
                <div className="item__cards">
                    {
                        items.map(data => (
                            <Fooditem id={data.id} image={data.image} name={data.name} detail={data.detail} price={data.price}/>
                        ))                        
                    }
                </div>
            </Container>
        </div>
    )
}

export default Menu
