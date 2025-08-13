import { useCallback, useState } from "react";

type UseToggleReturn = [
    isToggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    toggle: () => void,
]

export default function useToggle(intialState = false):UseToggleReturn {
    
    const [isToggle, setToggle] = useState(intialState);

     const toggle = useCallback(() => {
        setToggle((prev) => !prev)

    }, [])

    return [isToggle, setToggle, toggle] as const;
}