import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const MAIN_URL = "http://localhost:3000"

function App() {

  const getUserData = async () => {

    const response = await axios.get(`${MAIN_URL}/fake_data`)

    console.log(response.data)
  }


  const getUserDataByID = async (id) => {

    const response = await axios.get(`${MAIN_URL}/fake_data/${id}`)

    console.log(response.data)
  }



  useEffect(() => {
    
    //getUserData()
    
    getUserDataByID(4296)
    
  }, [])


  return (
    <>
      
    </>
  )
}

export default App
