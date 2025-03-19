import { useState } from 'react'
import ReuseableUI from './components/ReuseableUI'
import ReducerCounter from './components/ReducerCounter'
import './App.css'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ReuseableUI />
    <Counter/>
    <ReducerCounter/>
    </>
  )
}

export default App
