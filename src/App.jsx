import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [heading, setHeading] = useState("default text");

  function changeHeading()
  {
    setHeading("Altered heading")
  }

  return (
    <>
      <h1>{heading}</h1>
      <button onClick={changeHeading}>Change Heading</button>
    </>
  )
}

export default App
