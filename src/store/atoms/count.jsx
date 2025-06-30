import { atom } from "jotai";

// creating a single global state_variable 
const countAtom = atom(0);



// Derieved atom but this is read only it will automatically update ( all componenet that uses the value will be updated )
const derievedCountDouble = atom((get) => {
    // "get" -> represent API that gets the value of the atom from which it should be derieved
    const value = get(countAtom);
    return value ? value * 2 : 1;
})

export { countAtom, derievedCountDouble }

// apis that are provided to get + set the value of atom
// 1. useAtom provides both value + setter function
// 2. useAtomValue provides only the value
// 3. useSetAtom provides only the setter function to set the value