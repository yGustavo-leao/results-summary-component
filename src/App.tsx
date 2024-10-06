import { ThemeProvider } from "styled-components";
import { ResultSummary } from "./components/ResultSummary/ResultSummary";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ResultSummary />
    </ThemeProvider>
  );
}

export default App;
