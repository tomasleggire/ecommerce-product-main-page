import React from "react";
import '../CSS/MenuMobile.css';
import { BsXLg } from "react-icons/bs";

export default function MenuMobile({menuMobileValue, setMenuMobileValue}) {
    return (
        <div className={`menu-mobile-main ${!!menuMobileValue && "show-main"}`}>
          <div className={`menu-mobile ${!!menuMobileValue && "show"}`}>
            <BsXLg onClick={() => setMenuMobileValue(false)} className='btn-close'/>
            <ul className="mobile-ul">
              <li className="mobile-li">Collections</li>
              <li className="mobile-li">Men</li>
              <li className="mobile-li">Woman</li>
              <li className="mobile-li">About</li>
              <li className="mobile-li">Contact</li>
            </ul>
          </div>   
        </div>
    )
}




         