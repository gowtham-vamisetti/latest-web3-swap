import React from 'react';

const SwapForm = () => {
    // Form state
    const [tokenAmount, setTokenAmount] = React.useState('');

    const handleSwap = (e) => {
        e.preventDefault();
        // Handle token swap logic here
    };

    return (
        <form onSubmit={handleSwap}>
            <input
                type="text"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                placeholder="Amount to swap"
                required
            />
            <button type="submit">Swap</button>
        </form>
    );
};

export default SwapForm;