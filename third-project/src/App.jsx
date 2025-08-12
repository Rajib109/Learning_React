import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="rajib" />
      <Card username="king" />
      <Card username="brother" />
    </>
  )
}

export default App
