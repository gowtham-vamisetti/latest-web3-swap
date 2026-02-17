import React, { useState } from 'react';

const SwapForm = () => {
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');
  const [slippageTolerance, setSlippageTolerance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the swap logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>From Token:</label>
        <input
          type="text"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          placeholder="Enter from token"
          required
        />
      </div>
      <div>
        <label>To Token:</label>
        <input
          type="text"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          placeholder="Enter to token"
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>
      <div>
        <label>Slippage Tolerance (%):</label>
        <input
          type="number"
          value={slippageTolerance}
          onChange={(e) => setSlippageTolerance(e.target.value)}
          placeholder="Slippage percentage"
          required
        />
      </div>
      <button type="submit">Swap</button>
    </form>
  );
};

export default SwapForm;