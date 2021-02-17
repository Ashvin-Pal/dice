import { useState } from "react";

function useToggle(initialVal) {
    const [state, setState] = useState(initialVal);

    return [state, setState];
}

export default useToggle;
