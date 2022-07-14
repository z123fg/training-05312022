import React from "react";
import { useSelector } from 'react-redux'

import "./DigitDisplay.css";

export default function DigitDisplay(props) {
    const digits = useSelector((state) => state.digit.value);

    return (
        <div className="calculator_digitdisplay">
            <p className="calculator_digitdisplay_label">{digits}</p>
        </div>
    );
}