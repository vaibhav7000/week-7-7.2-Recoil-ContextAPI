import { useRecoilState } from "recoil"
import { countAtom } from "../store/atoms/count.jsx";

export default function CustomButtons() {
    const [count, setCount] = useRecoilState(countAtom);

    return (
        <div>
            <button>
                Increment
            </button>

            <button>
                Decrement
            </button>
        </div>
    )
}