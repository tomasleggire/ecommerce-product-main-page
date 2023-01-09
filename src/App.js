import React, {useState} from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';
import useCommerceItems from './HOOKS/useCommerceItems';
import InfoProduct from './COMPONENTS/InfoProduct';
import ModalProduct from './COMPONENTS/ModalProduct';
import CartModal from './COMPONENTS/CartModal';

function App() {

  const [items, focusItem, changeFocus, changeFocusIzq, changeFocusDer, contadorCart, setContadorCart, sumarContador, restarContador, addToCart, cartContent, setCartContent] = useCommerceItems();

  const [modalValue, setModalValue] = useState(false);
  const [cartModalValue, setCartModalValue] = useState(false);

  return (
    <div className="App">
      <Navbar
        setCartModalValue={setCartModalValue} 
      />
      <div className='main-contain'>
        <PhotoGallery 
          items={items}
          focusItem={focusItem}
          changeFocus={changeFocus}
          changeFocusIzq={changeFocusIzq}
          changeFocusDer={changeFocusDer}
          setModalValue={setModalValue}
          setCartModalValue={setCartModalValue}
        />
        <InfoProduct 
          contadorCart={contadorCart}
          sumarContador={sumarContador}
          restarContador={restarContador}
          addToCart={addToCart}
          setContadorCart={setContadorCart}
          setCartModalValue={setCartModalValue}
        />
      </div>
      {modalValue && (
        <ModalProduct 
          setModalValue={setModalValue}
          items={items}
          focusItem={focusItem}
          changeFocus={changeFocus}
          changeFocusIzq={changeFocusIzq}
          changeFocusDer={changeFocusDer}
        />
      )}
      {cartModalValue && (
        <CartModal
          setCartModalValue={setCartModalValue}
          cartContent={cartContent}
          setCartContent={setCartContent}
          focusItem={focusItem}
          items={items}
        />
      )}
    </div>
  );
}

export default App;
