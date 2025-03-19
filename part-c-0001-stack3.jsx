import { Stack, Divider } from "@mui/material";

function App() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      spacing={3}
      justifyContent="space-evenly"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </Stack>
  );
}

export default App;
