import React from "react";
import "./Die.css";

function Die(props) {
    const { number, isRolling } = props;
    let faClass = "fas fa-dice-" + number;
    if (isRolling) {
        faClass = "shaking fas fa-dice-" + number;
    } else {
        faClass = "fas fa-dice-" + number;
    }
    return <i className={faClass}></i>;
}

export default Die;
