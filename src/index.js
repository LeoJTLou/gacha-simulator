import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gacha from './Gacha';
import { wishCount } from './data';

function Root() {
  const [showApp, setShowApp] = useState('home');
  const [wishes, setWishCount] = useState(wishCount);
  const [pullResults, setPullResults] = useState([]);
  const [currentBanner, setCurrentBanner] = useState('Character');
  const [currentBannerColor, setCurrentBannerColor] = useState('cyan');
  const [pityCounter5, setPityCounter5] = useState(0);
  const [pityCounter4, setPityCounter4] = useState(0);


  return (
    <>
      {showApp === 'home' && 
      <App 
        setShowApp={setShowApp} 
        wishCount={wishes} 
        setWishCount={setWishCount} 
        currentBanner={currentBanner} 
        setCurrentBanner={setCurrentBanner} 
        currentBannerColor={currentBannerColor} 
        setCurrentBannerColor={setCurrentBannerColor} 
        setPullResults={setPullResults}
        pityCounter5={pityCounter5}
        setPityCounter5={setPityCounter5}
        pityCounter4={pityCounter4}
        setPityCounter4={setPityCounter4}
         />}
      {showApp === 'wish' && <Gacha results={pullResults} setShowApp={setShowApp}/>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
