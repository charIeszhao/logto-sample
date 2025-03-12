import { LogtoProvider } from '@logto/react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Callback from './pages/Callback';
import Home from './pages/Home';

const config = {
  endpoint: import.meta.env.VITE_LOGTO_ENDPOINT,
  appId: import.meta.env.VITE_LOGTO_APPID,
};

const App = () => (
  <LogtoProvider config={config}>
    <Routes>
      <Route path="/callback" element={<Callback />} />
      <Route path="/login" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </LogtoProvider>
);

export default App;
