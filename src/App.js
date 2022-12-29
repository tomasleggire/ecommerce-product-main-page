import React from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';
import useCommerceItems from './HOOKS/useCommerceItems';

function App() {

  const [items, focusItem, setFocusItem] = useCommerceItems();

  return (
    <div className="App">
      <Navbar />
      <div className='main-contain'>
        <PhotoGallery items={items} focusItem={focusItem} setFocusItem={setFocusItem}/>
      </div>
    </div>
  );
}

export default App;
