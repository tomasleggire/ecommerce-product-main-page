import React from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';
import useCommerceItems from './HOOKS/useCommerceItems';

function App() {

  const [items, focusItem, changeFocus] = useCommerceItems();

  return (
    <div className="App">
      <Navbar />
      <div className='main-contain'>
        <PhotoGallery items={items} focusItem={focusItem} changeFocus={changeFocus}/>
      </div>
    </div>
  );
}

export default App;
