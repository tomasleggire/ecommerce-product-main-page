import React from "react";
import '../CSS/Narbar.css';
import logo from '../IMAGES/logo.svg';
import profileImg from '../IMAGES/image-avatar.png';
import {BsCart3} from "react-icons/bs";
import {BsList} from "react-icons/bs";

export default function Navbar() {
    return (
        <nav>
            <BsList className="list-icon"/>
            <div className="img-div"><img className='logo-img' src={logo}/></div>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Woman</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className="profile-main">
                <BsCart3 className="cart-logo"/>
                <div className="profile-img"><img className='avatar-img' src={profileImg}/></div>
            </div>
        </nav>
    )
}