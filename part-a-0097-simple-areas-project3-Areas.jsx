import React from 'react'
import AreaCard from "./AreaCard"

import Agents from "../pictures/aiagents.jpg"
import DRL from "../pictures/drl.jpg"
import Web3 from "../pictures/web3.jpg"

function Areas() {
  return (
    <div className='areas'>

        <AreaCard title={"AI Agents"} pic={Agents} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam, vitae officia quas repellendus deleniti?"} />

        <AreaCard title={"Deep RL"} pic={DRL} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam, vitae officia quas repellendus deleniti?"} />

        <AreaCard title={"Web3 and Blockchain"} pic={Web3} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam, vitae officia quas repellendus deleniti?"} />

      
    </div>
  )
}

export default Areas

