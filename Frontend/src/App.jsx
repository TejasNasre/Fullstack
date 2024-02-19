import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })
  return (
    <>
      <h1>List Of Jokes</h1>
      <p>Jokes Length : {jokes.length}</p>
      <div>{jokes.map((joke,index) => (
         <div key={joke.id}>
          <h3>{joke.joke}</h3>
        </div>
      ))}</div>
    </>
  )
}

export default App
