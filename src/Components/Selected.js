import React from "react";
import { useState, useEffect } from "react";

export default function Selected({key, title, removeFromSelected, index}) {
    return (
        <div>
            <div className="SearchField"> 
                {index}. {title} 
            </div>
            <div >
                <button onClick={() => removeFromSelected(index)}>
                    X
                </button>
            </div>
        </div>
    )
}

