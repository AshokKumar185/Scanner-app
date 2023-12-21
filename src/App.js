import { useState } from 'react';
import './App.css';
import QRScanner from './Component/QRScanner/qrcodeScanner';

function App() {
  const [clickScanner, setScanner] = useState(false)
  const clickToScan = () => {
    setScanner(true)
  }
  return (
    <div className='scanner-bg-container'>
      <div className='scanner-btn-container'>
    <button type='button' className='scan-button' onClick={clickToScan}>Scan</button>
    </div>
    <QRScanner /> 
    </div>
   
  );
}

export default App;
