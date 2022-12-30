import React from "react";
import '../CSS/InfoProduct.css';
import {BsDash} from 'react-icons/bs';
import {BsPlus} from 'react-icons/bs';
import {BsCart3} from "react-icons/bs";

export default function InfoProduct() {
    return (
        <div className="main-info-container">
          <span className="company-span">SNEAKER COMPANY</span>
          <h1 className="title-product">Fall Limited Edition Sneakers</h1>
          <p className="description-product">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div className="price-container">
            <span className="price">$125.00</span>
            <span className="price-cheap">50%</span>
          </div>
          <span className="old-price">$250.00</span>
          <div className="footer-info">
            <div className="contador-container">
              <BsDash className="btn"/>
              <span className="contador">0</span>
              <BsPlus className="btn"/>
            </div>
            <div className="add-btn">
                <BsCart3 className="log-add-btn"/>
                <span className="add">Add to cart</span>
            </div>
          </div>
        </div>
    )
}