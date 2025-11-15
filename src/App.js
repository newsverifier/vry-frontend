import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState({ chain_id: 'loading', height: 'loading' });
  const [depositResult, setDepositResult] = useState('');

  useEffect(() => {
    fetch('http://localhost:26657/status')
      .then(res => res.json())
      .then(data => {
        setStatus({
          chain_id: data.result.node_info.network,
          height: data.result.sync_info.latest_block_height
        });
      })
      .catch(() => setStatus({ chain_id: 'offline', height: 'offline' }));
  }, []);

  const simulateDeposit = () => {
    // Mock deposit simulation
    const amount = Math.floor(Math.random() * 1000) + 100; // 100-1100 $VRY
    setDepositResult(`Minted ${amount} $VRY from simulated BTC deposit!`);
  };

  const submitPoF = () => {
    alert('Submitting Proof of Fact... AI scoring... Minted 1960 $VRY!');
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial', background: '#0F172A', color: '#F1F5F9', minHeight: '100vh' }}>
      <h1 style={ { color: '#14F195' } }>$VRY Testnet Frontend</h1>
      <p>Chain ID: <strong>{status.chain_id}</strong></p>
      <p>Block Height: <strong>{status.height}</strong></p>
      <button onClick={submitPoF} style={ { padding: '15px 30px', background: '#F59E0B', border: 'none', borderRadius: '8px', color: '#000', fontWeight: 'bold', margin: '10px' } }>
        Test Proof of Fact Mining
      </button>
      <button onClick={simulateDeposit} style={ { padding: '15px 30px', background: '#14F195', border: 'none', borderRadius: '8px', color: '#000', fontWeight: 'bold', margin: '10px' } }>
        Simulate BTC Deposit
      </button>
      <p>{depositResult}</p>
      <p>
        <a href="/architecture.html" style={ { color: '#14F195' } }>Architecture</a> | 
        <a href="/whitepaper.pdf" style={ { color: '#14F195' } }>Whitepaper</a> | 
        <a href="https://github.com/newsverifier/vry-chain" target="_blank" style={ { color: '#14F195' } }>GitHub</a>
      </p>
    </div>
  );
}

export default App;
