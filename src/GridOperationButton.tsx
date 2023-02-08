import { Grid, Button, styled } from "@mui/material";

interface IGridOperationButton {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(254,241,73,.1)",
  borderColor: props.selected ? "#fff" : "rgba(255,241,73,.5)",
}));

export const GridOperationButton: React.FC<IGridOperationButton> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid> 
  );
};
