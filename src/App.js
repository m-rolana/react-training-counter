import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import theme from "./theme";
import Counter from "./components/Counter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box textAlign="center">
          <Counter />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
