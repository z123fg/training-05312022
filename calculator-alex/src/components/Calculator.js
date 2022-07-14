import React, { useState } from "react";

const state = {
        curNum: 0,
        prevNum: 0,
        nextNum: 0
}

const Calculator = () => {
    const [cal, setCal] = useState(state);
    
    const handleAdd = () => {
        setCal({
            ...cal,
            operator: "add",
            curNum: "",
            prevNum: cal.prevNum ? cal.prevNum : cal.curNum,
            nextNum: 0
        });
    }

    const handleSubtract = () => {
        setCal({
            ...cal,
            operator: "subtract",
            curNum: "",
            prevNum: cal.prevNum ? cal.prevNum : cal.curNum,
            nextNum: 0
        });
    }

    const handleMultiply = () => {
        setCal({
            ...cal,
            operator: "multiply",
            curNum: "",
            prevNum: cal.prevNum ? cal.prevNum : cal.curNum,
            nextNum: 0
        });
    }

    const handleDivide = () => {
        setCal({
            ...cal,
            operator: "divide",
            curNum: "",
            prevNum: cal.prevNum ? cal.prevNum : cal.curNum,
            nextNum: 0
        });
        if (cal.prevNum !== "" || cal.prevNum !== 0){ handleSolution()}
    }

    const handleSolution = () => {
        switch(cal.operator) {
            case "add":
                setCal({
                    ...cal,
                    curNum: "",
                    prevNum: +cal.prevNum + +(cal.nextNum || cal.curNum),
                    nextNum: cal.nextNum === 0 ? cal.nextNum : cal.next
                });
                return;
            case "subtract":
                setCal({
                    ...cal,
                    curNum: "",
                    prevNum: +cal.prevNum - +(cal.nextNum || cal.curNum),
                    nextNum: cal.nextNum === 0 ? cal.nextNum : cal.next
                });
                return;
            case "multiply":
                setCal({
                    ...cal,
                    curNum: "",
                    prevNum: +cal.prevNum * +(cal.nextNum || cal.curNum),
                    nextNum: cal.nextNum === 0 ? cal.nextNum : cal.next
                });
                return;
            case "divide":
                setCal({
                    ...cal,
                    curNum: "",
                    prevNum: +cal.prevNum / +(cal.nextNum || cal.curNum),
                    nextNum: cal.nextNum === 0 ? cal.nextNum : cal.next
                });
                return;
            // default:
            //     return;
        }
    }

    const handleClear = (e) => {
        setCal(state);
    }

    const handlePM = () => {
        setCal({ ...cal, curNum: "", prevNum: -(cal.prevNum || cal.curNum) });
    };

    const handlePercent = () => {
        setCal({ ...cal, curNum: "", prevNum: +(cal.curNum || cal.prevNum) * 0.01 });
    };

    const handleAddNum = (e) =>{
        const { id } = e.currentTarget;
        console.log(id);
        if (id !== ".") {
            if (+id === 0 && +cal.curNum === 0) {
                return;
            }
            setCal({...cal, curNum: +cal.curNum === 0 ? id : +(cal.curNum + id)})
            //console.log(cal.curNum);
        }
        else {
            if (cal.curNum.toString().includes(".")) {
                return;
            }
            setCal({...cal, curNum: +cal.curNum + id});
        }
    };

    const displayCurNum = () => {
        const display = cal.curNum || cal.prevNum;

        if (display.toString().length > 8) {
            return Number.parseFloat(display).toExponential(3);
        }

        return display;
    }

    return(
        <div>
            <div>{displayCurNum()}</div>
            <div>
                <button onClick={handleClear}>AC</button>
                <button onClick={handlePM}>±</button>
                <button onClick={handlePercent}>%</button>
                <button onClick={handleDivide}>&divide;</button>
            </div>
            <div>
                <button id="7" onClick={handleAddNum}>7</button>
                <button id="8" onClick={handleAddNum}>8</button>
                <button id="9" onClick={handleAddNum}>9</button>
                <button onClick={handleMultiply}>&times;</button>
            </div>
            <div>
                <button id="4" onClick={handleAddNum}>4</button>
                <button id="5" onClick={handleAddNum}>5</button>
                <button id="6" onClick={handleAddNum}>6</button>
                <button onClick={handleSubtract}>-</button>
            </div>
            <div>
                <button id="1" onClick={handleAddNum}>1</button>
                <button id="2" onClick={handleAddNum}>2</button>
                <button id="3" onClick={handleAddNum}>3</button>
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                <button id="0" onClick={handleAddNum}>0</button>
                <button onClick={handleAddNum}>.</button>
                <button onClick={handleSolution}>=</button>
            </div>
        </div>
    );
}

export default Calculator;