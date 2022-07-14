import React from "react";
import { useSelector } from 'react-redux'

import "./History.css"

export default function History(props) {
    const history = useSelector((state) => state.history.value);

    return (
        <div className="calculator_history">
            <label className="calculator_history_label">History</label>
            <div className="calculator_history_list">
                {
                    history.map((val) => {
                        return (
                            <label className="calculator_history_list_label">
                                {val}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    );
}