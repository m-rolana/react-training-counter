import { ThemeProvider } from '@mui/material/styles';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import theme from "./theme";
import Counter from "./Counter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }} textAlign='center'>
          <Counter />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
