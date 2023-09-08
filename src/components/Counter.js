import "./Counter";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CounterButton from "./CounterButton";


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
        <CounterButton color='buttonPlus' onClickFn={performMinus} text='-' />
        <CounterButton color='buttonMinus' onClickFn={performPlus} text='+' />
      </Box>
    </div>
  );
}
