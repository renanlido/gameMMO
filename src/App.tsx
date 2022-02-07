import { ThemeProvider } from 'styled-components';
import theme from './global/themes';
import GlobalStyles from './global/styles/global';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
