import { createClient, configureChains, chain } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { AlchemyProvider } from 'viem/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains([
  chain.mainnet,
  chain.sandbox,
], [
  publicProvider(),
  new AlchemyProvider(process.env.ALCHEMY_ID),
]);

const client = createClient({
  autoConnect: true,
  connectors: () => [
    new InjectedConnector({ chains }),
  ],
  provider,
});

function Web3Provider({ children }) {
  return (
    <WagmiConfig client={client}>
      {children}
    </WagmiConfig>
  );
}

export default Web3Provider;