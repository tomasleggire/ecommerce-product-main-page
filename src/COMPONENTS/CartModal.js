import React from "react";
import '../CSS/CartModal.css';
import { BsXLg } from "react-icons/bs";

export default function CartModal({setCartModalValue, cartContent, setCartContent, focusItem}) {
    return (
        <div className="main-modal-cart">
            <div className="title-container-cart">
            <h2 className="title-cart">Cart</h2>
            <BsXLg className="btn-close-cart" onClick={() => setCartModalValue(false)}/>
            </div>
            <div className="cart-items-container">
                
                {cartContent === 0 ? 
                  <span className="span-empty-cart">You cart is empty.</span> :

                  <div className="compra-container">
                    <div className="compra-info">
                        <img src={focusItem.min} />
                        <div className="compra-info-prices">
                            <p className="title-price">Fall Limited Edition Sneakers</p>
                            <div className="prices-total">
                                <span className="prices-total-price">${focusItem.price}.00 x {cartContent} </span>
                                <span className="total-price-final">${(focusItem.price * cartContent)}.00</span>
                            </div>
                        </div>
                    </div>
                  </div>

                }
            </div>
        </div>
    )
}