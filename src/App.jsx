import { LogtoProvider } from '@logto/react';
import Home from './pages/Home';

const config = {
  endpoint: import.meta.env.VITE_LOGTO_ENDPOINT,
  appId: import.meta.env.VITE_LOGTO_APPID,
};

const App = () => (
  <LogtoProvider config={config}>
    <Home />
  </LogtoProvider>
);

export default App;
