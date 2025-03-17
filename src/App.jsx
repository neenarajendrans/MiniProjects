import { useState } from 'react'
import ReuseableUI from './components/ReuseableUI'
import './App.css'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ReuseableUI />
    <Counter/>
    </>
  )
}

export default App
