import React from "react";
import '../CSS/ModalProduct.css';
import { BsXLg } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

export default function ModalProduct({ setModalValue, items, focusItem, changeFocus, changeFocusIzq, changeFocusDer }) {
    return (
        <div className="main-modal-container">
            <div className="main-modal">
                <BsXLg onClick={() => setModalValue(false)} className='btn-close-modal'/>
                <div className="main-photo-modal">
                    <img src={focusItem.img} />
                    <div className="btn-scroll-container-modal">
                      <BiChevronLeft 
                        className={`btn-scroll-modal izq ${focusItem.id === 1 ? 'disabled' : ''}`}
                        onClick={changeFocusIzq}
                      />
                      <BiChevronRight
                        className={`btn-scroll-modal der ${focusItem.id === 4 ? 'disabled' : ''}`}
                        onClick={changeFocusDer}
                      />
                    </div>
                </div>
                <div className="options-modal-container">
                    {items.map((item) => {
                        return (
                            <div className={`option-modal ${item.id === focusItem.id ? 'border' : ''}`} onClick={() => changeFocus(item.id)}>
                                <img src={item.img} className={`${item.id === focusItem.id ? 'selected' : ''} img-option`}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}