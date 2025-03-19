import { Stack } from "@mui/material";

function App() {
  return (

    <Stack direction={{xs: "column", sm: "row", md: "row"}} spacing={3}>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </Stack>

  );
}

export default App;
