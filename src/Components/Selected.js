import React from "react";
import { useState, useEffect } from "react";

export default function Selected(props) {

    return (
        <div>
            <div classname="SearchField"> 
                {props.title}
            </div>
            <div >
                <button onClick={props.removeFromSelected}>

                </button>
            </div>
        </div>
    )
}