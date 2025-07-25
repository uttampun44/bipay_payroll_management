import { useState } from "react";

interface UseToggleReturn {
    isToggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
}

export default function useToggle(initialState = false):UseToggleReturn {
    
    const [isToggle, setToggle] = useState(initialState);

    const toggle = () => setToggle(() => !isToggle);

    return {isToggle, setToggle, toggle};
}