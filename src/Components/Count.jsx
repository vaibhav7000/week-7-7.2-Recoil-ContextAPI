import { atom, useAtom, useAtomValue } from "jotai";
import { countAtom, derievedCountDouble, derievedCountTriple } from "../store/atoms/count";

function Count() {
    const count = useAtomValue(countAtom);
    console.log("count rendered")
    return (
        <div className="count">
            {count}
        </div>
    )
}

export function DoubleCount() {
    const doubleCount = useAtomValue(derievedCountDouble);

    return (
        <div>
            Double count is {doubleCount}
        </div>
    )
}

export function ChangeCount() {
    const [triple, setBaseCount] = useAtom(derievedCountTriple);

    return (
        <div style={{
            marginTop: 20,
        }}>
            <div>
                {triple}
            </div>

            <input type="text" onInput={(function(event) {
                const value = parseInt(event.target.value);
                setBaseCount(value);
            })}/>
        </div>
    )
}

export default Count;

