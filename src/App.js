import React from 'react';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import PhotoGallery from './COMPONENTS/PhotoGallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-contain'>
        <PhotoGallery />
      </div>
    </div>
  );
}

export default App;
