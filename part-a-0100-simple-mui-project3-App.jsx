import Areas from "./components/Areas"
import Header from "./components/Header"

import Agents from "./pictures/aiagents.png"
import DRL from "./pictures/drl.jpg"
import WebThree from "./pictures/web3.jpg"


function App() {

  return (
    <>
      <Header />

      <Areas image={Agents} title={"AI Agents"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit. Doloremque minima pariatur expedita sequi."} />

      <Areas image={DRL} title={"Deep Reinforcement Learning"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit. Doloremque minima pariatur expedita sequi."} />

      <Areas image={WebThree} title={"Web3 Blockchain"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit. Doloremque minima pariatur expedita sequi."} />

    </>
  )
}

export default App
