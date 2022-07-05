import React, { useState } from "react";
import "./Select_Menu.css";

export default function Select_Menu(props) {
    const [selectAll, setSelectAll] = useState(false);
    const [kosher, setKosher] = useState(false);
    const [celery, setCelery] = useState(false);
    const [egg, setEgg] = useState(false);


    if (kosher && celery && egg && !selectAll) {
        setSelectAll(true);
    }
    let kosher_label = kosher ? (<label className="SelectMenuSelectedLabel">Kosher</label>) : (<></>);
    let celery_label = celery ? (<label className="SelectMenuSelectedLabel">No Celery (inc celeriac)</label>) : (<></>);
    let egg_label = egg ? (<label className="SelectMenuSelectedLabel">No Egg</label>) : (<></>);
    return (
        <div className="SelectMenu">
            <div className="SelectMenuTopSection">
                <div className="SelectMenuSelectedValueContainer">
                    <label className="SelectedMenuSelectedValueLabel">Selected Value: </label>
                    <div className="SelectMenuSelectedValueLabelContainer">
                        {kosher_label}
                        {celery_label}
                        {egg_label}
                    </div>
                </div>
                <div className="SelectMenuInputsContainer">
                    
                    <div className="SelectMenuCheckContainer">
                    <input type="checkbox" className="SelectMenuInput" name="SelectAll" 
                        checked={selectAll}
                        onChange={()=>{
                            setSelectAll(!selectAll);
                            setKosher(!selectAll);
                            setCelery(!selectAll);
                            setEgg(!selectAll);
                        }}
                    />
                    <label className="SelectMenuLabel" htmlFor="SelectAll">Select All</label>
                    </div>
                    <div className="SelectMenuCheckContainer">
                    <input type="checkbox" className="SelectMenuInput" name="Kosher" 
                        checked={kosher}
                        onChange={()=>{
                            if (kosher) {
                                setSelectAll(false);
                            }
                            setKosher(!kosher);
                        }}
                    />
                    <label className="SelectMenuLabel" htmlFor="Kosher">Kosher</label>
                    </div>
                    <div className="SelectMenuCheckContainer">
                    <input type="checkbox" className="SelectMenuInput" name="Celery" 
                        checked={celery}
                        onChange={()=>{
                            if (celery) {
                                setSelectAll(false);
                            }
                            setCelery(!celery);
                        }}
                    />
                    <label className="SelectMenuLabel" htmlFor="Celery">No Celery (inc celeriac)</label>
                    </div>
                    <div className="SelectMenuCheckContainer">
                    <input type="checkbox" className="SelectMenuInput" name="Egg" 
                        checked={egg}
                        onChange={()=>{
                            if (egg) {
                                setSelectAll(false);
                            }
                            setEgg(!egg);
                        }}
                    />
                    <label className="SelectMenuLabel" htmlFor="Egg">No Egg</label>
                    </div>
                </div>
            </div>
            <div className="SelectMenuBottomSection">
                <button className="SelectMenuClear"
                    onClick={()=>{
                        setSelectAll(false);
                        setKosher(false);
                        setCelery(false);
                        setEgg(false);
                    }}
                >
                    Clear All
                </button>
            </div>
        </div>
    )
}