import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import CalcButton from "./CalcButton/CalcButton";

import { add, backspace, set } from "../ReduxReducers/DigitReducer";
import { add_history } from "../ReduxReducers/HistoryReducer";

import "./ButtonList.css";

export default function ButtonList(props) {
    const digits = useSelector((state) => state.digit.value);
    const dispatch = useDispatch();

    return (
        <div className="calculator_buttonlist">
            <div className="calculator_buttonlist_buttonrow">
                <CalcButton display_digit="%" val_digit="%" theme="light" onClick={()=>{dispatch(add(" % "))}}/>
                <CalcButton display_digit="(" val_digit="(" theme="light" onClick={()=>{dispatch(add("("))}}/>
                <CalcButton display_digit=")" val_digit=")" theme="light" onClick={()=>{dispatch(add(")"))}}/>
                <CalcButton display_digit="Backspace" val_digit="" theme="light" onClick={()=>{dispatch(backspace())}}/>
            </div>
            <div className="calculator_buttonlist_buttonrow">
                <CalcButton display_digit="7" val_digit="7" theme="dark" onClick={()=>{dispatch(add("7"))}}/>
                <CalcButton display_digit="8" val_digit="8" theme="dark" onClick={()=>{dispatch(add("8"))}}/>
                <CalcButton display_digit="9" val_digit="9" theme="dark" onClick={()=>{dispatch(add("9"))}}/>
                <CalcButton display_digit="/" val_digit="/" theme="light" onClick={()=>{dispatch(add(" / "))}}/>
            </div>
            <div className="calculator_buttonlist_buttonrow">
                <CalcButton display_digit="4" val_digit="4" theme="dark" onClick={()=>{dispatch(add("4"))}}/>
                <CalcButton display_digit="5" val_digit="5" theme="dark" onClick={()=>{dispatch(add("5"))}}/>
                <CalcButton display_digit="6" val_digit="6" theme="dark" onClick={()=>{dispatch(add("6"))}}/>
                <CalcButton display_digit="*" val_digit="*" theme="light" onClick={()=>{dispatch(add(" * "))}}/>
            </div>
            <div className="calculator_buttonlist_buttonrow">
                <CalcButton display_digit="1" val_digit="1" theme="dark" onClick={()=>{dispatch(add("1"))}}/>
                <CalcButton display_digit="2" val_digit="2" theme="dark" onClick={()=>{dispatch(add("2"))}}/>
                <CalcButton display_digit="3" val_digit="3" theme="dark" onClick={()=>{dispatch(add("3"))}}/>
                <CalcButton display_digit="-" val_digit="-" theme="light" onClick={()=>{dispatch(add(" - "))}}/>
            </div>
            <div className="calculator_buttonlist_buttonrow">
                <CalcButton display_digit="=" val_digit="" theme="equal" onClick={()=>{
                    try {
                        let eval_value = eval(digits);
                        let history_to_add = digits + " = " + String(eval_value);
                        dispatch(set(eval_value));
                        dispatch(add_history(history_to_add));
                    } catch(error) {
                        alert("Invalid Calculation");
                    }
                }}/>
                <CalcButton display_digit="0" val_digit="0" theme="dark" onClick={()=>{dispatch(add("0"))}}/>
                <CalcButton display_digit="." val_digit="." theme="dark" onClick={()=>{dispatch(add("."))}}/>
                <CalcButton display_digit="+" val_digit="+" theme="light" onClick={()=>{dispatch(add("+"))}}/>
            </div>
        </div>
    );
}