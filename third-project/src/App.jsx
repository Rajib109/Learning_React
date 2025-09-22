import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="John" />
      <Card username="Doe" />
    </>
  )
}

export default App
