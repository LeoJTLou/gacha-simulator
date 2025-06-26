import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Root() {
  const [showApp, setShowApp] = useState(true);

  return (
    <>
      {showApp ? <App setShowApp={setShowApp} /> : <div/>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
