import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StrictMode } from 'react';

// Enable React Strict Mode if you want to use it (components will be rendered twice)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
