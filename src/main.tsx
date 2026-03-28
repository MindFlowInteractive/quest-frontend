import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // ✅ import QueryClient
import './index.css';
import App from './App.tsx';
import { useApplyTheme } from './theme/useApplyTheme';

// Create a React Query client instance
const queryClient = new QueryClient();

const Root = () => {
  useApplyTheme();
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> {/* ✅ Wrap your app with provider */}
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);