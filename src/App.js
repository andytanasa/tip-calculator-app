import { GlobalStyles } from "./styledComponets/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponets/theme";
import { Container } from "./styledComponets/Container.styled";
import Card from "./components/Card";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>SPLITTER</h1>
        <Card />
      </Container>
    </ThemeProvider>
  );
}

export default App;
