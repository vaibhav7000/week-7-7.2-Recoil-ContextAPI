import { atom } from "jotai";

// creating a single global state_variable 
const countAtom = atom(0);



// Derieved atom but this is read only it will automatically update ( all componenet that uses the value will be updated )
const derievedCountDouble = atom((get) => {
    // "get" -> represent API that gets the value of the atom from which it should be derieved
    const value = get(countAtom);
    return value ? value * 2 : 1;
})

// Derieved atom -> read + write (base atom from which it is derieved ) this allows to update the source / base atom from which it is derieved directly from the derived ones.
const derievedCountTriple = atom((get) => get(countAtom) ? get(countAtom) * 3 : 1 , (get, set, newValue) => {
    if(!newValue) {
        set(countAtom, 0);
        return
    }

    set(countAtom, newValue); // newValue represent the value that we from the setCount method that we get from useAtom or useSetAtom
})

export { countAtom, derievedCountDouble, derievedCountTriple }

// Creating derieved atoms helps to make clean components that only show the data present inside the atom

// IMP -> In Jotai, any time you call get(someAtom) inside another atom, Jotai automatically tracks that as a dependency.

// apis that are provided to get + set the value of atom
// 1. useAtom provides both value + setter function
// 2. useAtomValue provides only the value
// 3. useSetAtom provides only the setter function to set the value