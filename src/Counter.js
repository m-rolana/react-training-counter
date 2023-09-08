import "./css/counter.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
    button: { margin: 2, width: 150, height: 50 },
};

export default function Counter() {
  const [count, setCount] = useState(0);

  const performMinus = () => {
    setCount(count - 1);
  };

  const performPlus = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Counter
      </Typography>

      <Typography variant="h1" gutterBottom>
      {count}
      </Typography>

      <Box>
        <Button
            sx={styles.button}
            variant="contained"
            color="buttonPlus"
            className="button-counter"
            onClick={performMinus}
        >
            -
        </Button>
        <Button
            sx={styles.button}
            variant="contained"
            color="buttonMinus"
            className="button-counter"
            onClick={performPlus}
        >
            +
        </Button>
      </Box>
      
    </div>
  );
}
