import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'
import Count, { DoubleCount } from './Components/Count'
import CustomButtons from './Components/CustomButtons'


export function AppMain() {
  console.log("appmain")
  return (
      <CountWrapper/>
  )
}


function CountWrapper() {
  console.log("count-wrapper");
  return (
    <div>
      <Count/>
      <DoubleCount/>
      <CustomButtons/>
    </div>
  )
}








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

// Jotai as state-manegement tool
// Jotai has concept of "atom" (atom represents a single state_variable like useState but globally ) that creates a single state_variable globally means that this state can be accessed by any componenet present inside the application and if any component changes value present inside the state all the component that uses the value will be "re-render"

// atom is the smallest unit of state

// Primitive atoms -> Atoms that has boolean, string, numbers, object, arrays as direct values does not depends on the other atom to get the value

// Derived atoms -> atoms whose value is set according to the other atoms 

// Getting the value from the atom inside the componenet using the hook 
// 1. useAtom ( when the component uses both values and changes the value of the atom ) 2.useAtomValue ( if the component only uses the value ) 3. useSetAtom ( component that only updates the atom value inside the component )

// There are two options to make derived atoms 
// 1. one to make it read-only that means we cannot set the values directly else since they depend on other atom will be updated when the base atom will update ( read-only-derieved atom ) 
// 2. making the derieved atom read-only + writing the value of the base atom ( getting the value + writing the base atom value )