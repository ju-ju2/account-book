import { GlobalStyle } from './theme/globalStyle';
import ThemeTogglebutton from './component/ThemeTogglebutton';
import ThemeProvider from './context/ThemeProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';

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
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
        {/* <ThemeTogglebutton /> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
