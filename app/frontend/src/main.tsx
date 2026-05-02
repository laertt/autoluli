import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { loadRuntimeConfig } from './lib/config.ts';

function startApp() {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element not found');
  }

  createRoot(rootElement).render(<App />);
}

// Load config in background (DO NOT block render)
loadRuntimeConfig()
  .then(() => console.log('Config loaded'))
  .catch(() => console.warn('Config failed, continuing anyway'))
  .finally(() => {
    startApp();
  });
