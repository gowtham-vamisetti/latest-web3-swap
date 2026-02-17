import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const WalletConnect = () => {
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                setWeb3(web3);
                try {
                    // Request account access if needed
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const accounts = await web3.eth.getAccounts();
                    setAccount(accounts[0]);
                } catch (error) {
                    console.error('User denied account access');
                }
            } else {
                console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        };

        loadWeb3();
    }, []);

    return (
        <div>
            <h1>Wallet Connection</h1>
            {account ? <p>Connected as: {account}</p> : <p>Please connect your wallet.</p>}
        </div>
    );
};

export default WalletConnect;
