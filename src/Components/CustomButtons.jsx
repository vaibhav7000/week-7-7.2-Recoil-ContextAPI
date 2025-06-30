import { useSetAtom } from "jotai";
import { countAtom } from "../store/atoms/count";


export default function CustomButtons() {

    const setCount = useSetAtom(countAtom);
    console.log("custom button")

    return (
        <div className="button-container">
            <button onClick={function() {
                setCount((previousValue) => previousValue + 1); // this is correct and setCount(count + 1) will be correct too but for that we have bring the value of count but will cause extra re-renders when the value of count will be changed

            }}>
                Increment
            </button>

            <button onClick={function() {
                setCount((previousValue) => previousValue - 1)
            }}>
                Decrement
            </button>
        </div>
    )
}