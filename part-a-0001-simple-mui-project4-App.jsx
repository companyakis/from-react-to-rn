import Areas from "./components/Areas";
import Header from "./components/Header";

import Agents from "./pictures/aiagents.png";
import DRL from "./pictures/drl.jpg";
import WebThree from "./pictures/web3.jpg";

import Container from '@mui/material/Container';

import Grid from "@mui/material/Grid2";

function App() {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{marginTop: 10}}>
          <Grid size={4}>
            <Areas
              image={Agents}
              title={"AI Agents"}
              description={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit. Doloremque minima pariatur expedita sequi."
              }
            />
          </Grid>
          <Grid size={4}>
            <Areas
              image={DRL}
              title={"Deep Reinforcement Learning"}
              description={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit. Doloremque minima pariatur expedita sequi."
              }
            />
          </Grid>
          <Grid size={4}>
            <Areas
              image={WebThree}
              title={"Web3 Blockchain"}
              description={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit. Doloremque minima pariatur expedita sequi."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
