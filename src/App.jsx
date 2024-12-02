import { useState } from 'react'
import Inicio from './components/inicio';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Inicio />
      </div>
    </>
  )
}

export default App
