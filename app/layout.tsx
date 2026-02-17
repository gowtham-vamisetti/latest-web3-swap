import { WagmiConfig, createClient } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const client = createClient({
  autoConnect: true,
  connectors: () => [
    new InjectedConnector(),
  ],
});

export default function Layout({ children }) {
  return (
    <WagmiConfig client={client}>
      <div>
        {children}
      </div>
    </WagmiConfig>
  );
}