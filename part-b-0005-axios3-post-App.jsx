import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const MAIN_URL = "http://localhost:3000"

function App() {

  // add user => post

  const postUser = async (newUser) => {

    const response = await axios.post(`${MAIN_URL}/fake_data`, newUser)

    console.log(response.data)
  }

  const getUserData = async () => {

    const response = await axios.get(`${MAIN_URL}/fake_data`)

    console.log(response.data)
  }


  const getUserDataByID = async (id) => {

    const response = await axios.get(`${MAIN_URL}/fake_data/${id}`)

    console.log(response.data)
  }


  useEffect(() => {

    const user1 = {
      "name": "Hakan Arslan",
      "id": "3245",
      "account": "657897"
    }

    postUser(user1)

  }, [])


  return (
    <>
      
    </>
  )
}

export default App
