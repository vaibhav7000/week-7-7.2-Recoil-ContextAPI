import { atom, useAtomValue } from "jotai";
import { countAtom, derievedCountDouble } from "../store/atoms/count";

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

export default Count;

