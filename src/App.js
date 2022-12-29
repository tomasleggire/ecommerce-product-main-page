import React from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';
import useCommerceItems from './HOOKS/useCommerceItems';

function App() {

  const [items, minItems, focusItem, setFocusItem] = useCommerceItems();

  return (
    <div className="App">
      <Navbar />
      <div className='main-contain'>
        <PhotoGallery items={items} minItems={minItems} focusItem={focusItem} setFocusItem={setFocusItem}/>
      </div>
    </div>
  );
}

export default App;
