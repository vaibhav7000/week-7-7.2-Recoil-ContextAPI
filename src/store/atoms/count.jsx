import { atom } from "recoil"

// atom -> defines a single state_variable
const countAtom = atom({
    key: "countAtom",
    default: 0
})


export { countAtom };

// APIs to deal with atom
// useRecoilState -> same as useState (provides api to get value of atom + api to set the value of the atom)
// useRecoilValue -> provides only value of atom
// useSetRecoilState -> provides api to set the value of atom