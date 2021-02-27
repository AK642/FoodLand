import React from 'react';
import './scss/CartForm.scss';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';


function CartForm() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="cartForm">
            <div className="bill__details">

                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <div className="bill__amount">
                                <span className="title">Total Amount:</span>
                                <span className="total__amount">{value}</span>
                            </div>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)} 
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <div className="shipping__details">
                    <form>
                        <input type="tel" placeholder="Phone number"></input>
                        <input type="text" placeholder="Address"></input>
                        <div className="submit__button">
                            <Button type="submit" className="button">Order Now</Button>
                        </div>
                    </form>
                </div>
                {/* <a href="#">Login to continue</a> */}
            </div>
        </div>
    )
}

export default CartForm
