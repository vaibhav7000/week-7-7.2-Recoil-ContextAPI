import { useRecoilValue, useRecoilState } from "recoil"
import { countAtom } from "../store/atoms/count.jsx";

export default function Count() {
    // getting the value from the countAtom
    const [count, setCount] = useRecoilState(countAtom);

    return (
        <div className="count">
            {"count"}
        </div>
    )
}

