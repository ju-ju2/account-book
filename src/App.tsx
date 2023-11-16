import { GlobalStyle } from './theme/globalStyle';
import ThemeProvider from './context/ThemeProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/Login';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
