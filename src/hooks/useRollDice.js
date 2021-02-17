import { useState } from "react";

function useRollDice(initVal = "one") {
    const [dieNum, setDieNum] = useState(initVal);
    const dieNumbers = ["one", "two", "three", "four", "five", "six"];
    const generateRdmNumber = () => {
        return Math.floor(Math.random() * dieNumbers.length);
    };
    const getDieNum = () => {
        setDieNum(dieNumbers[generateRdmNumber()]);
    };
    return [dieNum, getDieNum];
}

export default useRollDice;
