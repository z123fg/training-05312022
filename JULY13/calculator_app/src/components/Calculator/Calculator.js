import React from "react";

import ButtonList from "./ButtonList/ButtonList";
import DigitDisplay from "./DigitDisplay/DigitDisplay";
import History from "./History/History";

import "./Calculator.css";

export default function Calculator(props) {

    return (
        <div className="calculator_container">
            <div className="calculator_buttonlist_digitdisplay_container">
                <div className="calculator_digitdisplay_container">
                    <DigitDisplay />
                </div>
                <div className="calculator_buttonlist_container">
                    <ButtonList />
                </div>
            </div>

            <div className="calculator_history_container">
                <History />
            </div>
        </div>
    );
}