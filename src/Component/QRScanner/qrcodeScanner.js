import React, { useState,useEffect } from 'react';
import QrReader from 'react-qr-scanner';

const QRScanner = () => {
  const [result, setResult] = useState('');
  const [delay, setDelay] = useState(300);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Update delay based on mobile or non-mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setDelay(isMobile ? 1000 : 300);
  }, []);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
