import React, { useState } from 'react';
import './App.css';
import Banner from './banner';

function App() {
  const [wishes, setWishCount] = useState(260);
  const [currentBanner, setCurrentBanner] = useState('Character');
  const [currentBannerColor, setCurrentBannerColor] = useState('cyan');
  
  return (
    <div>
      <div style={{textAlign:'center'}}>
        <div className='header-text-element'>
          <h1>Gacha Simulator</h1>
          <p>{wishes} pulls</p>
        </div>
        <div className='banner-button-group'>
          <button onClick={() => {setCurrentBanner('Character'); setCurrentBannerColor('cyan')}}>Character Banner</button>
          <button onClick={() => {setCurrentBanner('Weapon'); setCurrentBannerColor('yellow')}}>Weapon Banner</button>
        </div>
      </div>
      <Banner title={currentBanner} bannerColor={currentBannerColor} wishCount={wishes} setWishCount={setWishCount}/>
    </div>
  );
}

export default App;