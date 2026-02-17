// Web3 Configuration for wagmi and viem

import { createClient, configureChains, Chain, defaultChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

// Define custom chains if needed
// const customChains: Chain[] = [/* your chains here */];

// Configure the chains you want to use
const { chains, provider } = configureChains(defaultChains, [publicProvider()]);

// Create a client
const client = createClient({
  autoConnect: true,
  provider,
});

export { client, chains };