import React, {useState} from "react";
import '../CSS/Narbar.css';
import logo from '../IMAGES/logo.svg';
import profileImg from '../IMAGES/image-avatar.png';
import {BsCart3} from "react-icons/bs";
import {BsList} from "react-icons/bs";
import MenuMobile from "./MenuMobile";

export default function Navbar({setCartModalValue}) {

    const [menuMobileValue, setMenuMobileValue] = useState(false);

    return (
        <nav>
            <BsList className="list-icon" onClick={() => setMenuMobileValue(true)}/>
            <div className="img-div"><img className='logo-img' src={logo}/></div>
            <ul className="desktop-ul">
              <li className="desktop-li">Collections</li>
              <li className="desktop-li">Men</li>
              <li className="desktop-li">Woman</li>
              <li className="desktop-li">About</li>
              <li className="desktop-li">Contact</li>
            </ul>
            <div className="profile-main">
                <BsCart3 className="cart-logo" onClick={() => setCartModalValue(true)}/>
                <div className="profile-img"><img className='avatar-img' src={profileImg}/></div>
            </div>
            <MenuMobile setMenuMobileValue={setMenuMobileValue} menuMobileValue={menuMobileValue}/>
        </nav>
    )
}