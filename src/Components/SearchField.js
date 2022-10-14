import React from "react";

import { useState, useEffect } from "react";

export default function SearchField(props) {

    const [searchTerm, setsearchTerm] = useState("");

    const onChange = (e) => {
        setsearchTerm(e.target.value);
        //console.log(searchTerm);
    }

    console.log((props.allpossiblesuggestions) );//+ allpossiblesuggestions.isArray());
    //console.log(typeof(allpossiblesuggestions) + " is array: " );//+ allpossiblesuggestions.isArray());

    const mocksubjects = ["10000", "10001", "10002"]

    return (
        <div classname="SearchField"> 
            <div classname="Title">
                Choose {props.title}:
            </div>
            <div classname="SearchTextField">
                <input type="text" value={searchTerm} onChange={onChange} placeholder="Enter search term here">

                </input>
            </div>
            <div classname="Suggestions">
            {
                props.allpossiblesuggestions.map((sub) => 
                    (<div>{sub}</div> )
                )
            }
            </div>
        </div>
    )
}