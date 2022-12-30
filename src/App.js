import React from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';
import useCommerceItems from './HOOKS/useCommerceItems';

function App() {

  const [items, focusItem] = useCommerceItems();

  return (
    <div className="App">
      <Navbar />
      <div className='main-contain'>
        <PhotoGallery items={items} focusItem={focusItem}/>
      </div>
    </div>
  );
}

export default App;
