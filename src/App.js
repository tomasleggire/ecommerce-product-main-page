import React, {useState} from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';
import useCommerceItems from './HOOKS/useCommerceItems';
import InfoProduct from './COMPONENTS/InfoProduct';
import ModalProduct from './COMPONENTS/ModalProduct';

function App() {

  const [items, focusItem, changeFocus, changeFocusIzq, changeFocusDer] = useCommerceItems();

  const [modalValue, setModalValue] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div className='main-contain'>
        <PhotoGallery 
          items={items}
          focusItem={focusItem}
          changeFocus={changeFocus}
          changeFocusIzq={changeFocusIzq}
          changeFocusDer={changeFocusDer}
          setModalValue={setModalValue}
        />
        <InfoProduct />
      </div>
      {modalValue && (
        <ModalProduct setModalValue={setModalValue}/>
      )}
    </div>
  );
}

export default App;
