import Something from "./components/Something"

function App() {

  const proverb = "A rolling stone gathers no moss!"

  const iSay = "Always keep it simple"

  const year = 2025

  return (
    <>

      <Something  proverb={proverb} iSay={iSay} year={year}/>


    </>
  )
}

export default App
