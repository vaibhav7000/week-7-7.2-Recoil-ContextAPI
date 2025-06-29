import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'

function App() {
  console.log("app")
  return (
    <Child/>
  )
}

// creating context
const CountContext = createContext();

// creating wrapper for context
export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={
      {count, setCount}
    }>
      { children }
    </CountContext.Provider>
  )
}

function Child() {
  console.log("child");
  return (
    <>
      <GChild/>
      <GChild/>
    </>
  )
}


function GChild() {
  const { count, setCount } = useContext(CountContext);
  console.log("GChild");
  return (
    <button onClick={() => setCount(previous => previous + 1)}>
      {count}
    </button>
  )
}

export default App


// Component that does not uses values from the contextAPI will not get re-rendered. Only those component will re-render will re-render that uses any value from the component