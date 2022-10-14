import React from "react";
import { useState, useEffect } from "react";

export default function Suggestion(props) {

    const [searchTerm, setsearchTerm] = useState("");
    

    const onChange = (e) => {
        setsearchTerm(e.target.value);
    }
    //onClick={props.onClickSuggestion(props.title)}
    return (
        <div>
            <div classname="SearchField"> 
                {props.title}
            </div>
            <div >
                <button onClick={props.updateSelected}>

                </button>
            </div>
        </div>
    )
}