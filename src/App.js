import './App.css';
import Banner from './banner';

function App({ setShowApp, setWishCount, wishCount, currentBanner, setCurrentBanner, currentBannerColor, setCurrentBannerColor, setPullResults, pityCounter5, pityCounter4, setPityCounter5, setPityCounter4 }) {
  
  return (
    <div>
      <div style={{textAlign:'center'}}>
        <div className='header-text-element'>
          <h1>Gacha Simulator</h1>
          <p>You have <b>{wishCount}</b> pulls</p>
        </div>
        <div className='banner-button-group'>
          <button onClick={() => {setCurrentBanner('Character'); setCurrentBannerColor('cyan')}}>Character Banner</button>
          <button onClick={() => {setCurrentBanner('Weapon'); setCurrentBannerColor('yellow')}}>Weapon Banner</button>
        </div>
      </div>
      <Banner title={currentBanner} bannerColor={currentBannerColor} wishCount={wishCount} setWishCount={setWishCount} setShowApp={setShowApp} setPullResults={setPullResults} setPityCounter4={setPityCounter4} pityCounter4={pityCounter4} setPityCounter5={setPityCounter5} pityCounter5={pityCounter5}/>
    </div>
  );
}

export default App;