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


// If an value present inside the context changes all the components that uses any value from the context will re-render + their children will also re-render.
// Suppose in context their is count1 and count2 as state_variable 1. component changes count 1 => all those component that uses the context will re-render -> the problem with contextAPI => "state_management libraries like zustand, recoil and redux solves theses problems " of component re-rendering

// In contextAPI all the values (store) i.e value={{ many values }} gets updated when any value updates => all componenets that uses contextAPI will re-rendered

// in state management tools when any value updates the whole store does not updated rather on that specific value changes that causes only those component to re-render that uses that particular value (benefit 1)