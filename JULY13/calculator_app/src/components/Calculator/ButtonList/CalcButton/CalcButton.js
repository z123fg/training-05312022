import React from "react";

import "./CalcButton.css";

export default function CalcButton(props) {

    return (
        <button className={"calculator_calcbutton " + props.theme} onClick={props.onClick}>
            {props.display_digit}
        </button>
    );
}