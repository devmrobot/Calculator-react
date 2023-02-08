import { Container, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";
import { GridDigitButton } from "./GridDigitButton";
import { GridOperationButton } from "./GridOperationButton";

const OutputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");

  const selectOperation = (operation: string) => {
    setOperation(operation);
  };

  const setDigit = (digit: string) => {
    setCurrentValue(digit);
  };

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOperationButton
              operation={"AC"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
            <GridOperationButton
              operation={"C"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
            <GridOperationButton
              operation={"%"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
            <GridOperationButton
              operation={"%"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"7"} enterDigit={setDigit} />
            <GridDigitButton digit={"8"} enterDigit={setDigit} />
            <GridDigitButton digit={"9"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"6"} enterDigit={setDigit} />
            <GridDigitButton digit={"5"} enterDigit={setDigit} />
            <GridDigitButton digit={"4"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"1"} enterDigit={setDigit} />
            <GridDigitButton digit={"2"} enterDigit={setDigit} />
            <GridDigitButton digit={"3"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"0"} enterDigit={setDigit} />
            <GridDigitButton digit={"."} enterDigit={setDigit} />
            <GridDigitButton digit={"1"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
