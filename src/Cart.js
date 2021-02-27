import React from 'react';
import './scss/Cart.scss'
import { Container } from '@material-ui/core';
import EmptyCart from './EmptyCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cartitem from './Cartitem';
import CartForm from './CartForm';
import { useStateValue } from './StateProvider';

function Cart() {

    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className="cart">
            {basket?.length==0 ? <EmptyCart /> : 
                
                <Container maxWidth="lg">
                    <div className="order">
                        <div className="order__title">
                            <ShoppingCartIcon />
                            <h1>Order summary</h1>
                        </div>
                        <div className="item__list">
                            {
                                basket.map(item => (
                                    <Cartitem 
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        detail={item.detail}
                                        price={item.price}
                                    />
                                ))
                            }
                        </div>
                        <CartForm />
                    </div>
                </Container>
            }
                
            
            
            
        </div>
    )
}

export default Cart