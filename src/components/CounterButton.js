import Button from "@mui/material/Button";

const style = {
  margin: 2,
  width: 150,
  height: 50,
  fontSize: 36
};

function CounterButton({ color, onClickFn, text }) {
  return (
    <Button
      sx={style}
      variant="contained"
      color={color}
      className="button-counter"
      onClick={onClickFn}
    >
      {text}
    </Button>
  );
}

export default CounterButton;
