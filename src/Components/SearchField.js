import React from "react";

import { useState, useEffect } from "react";
import Selected from "./Selected";
import Suggestion from "./Suggestion";

export default function SearchField(props) {

    const [searchTerm, setsearchTerm] = useState("");
    const [selected, setSelected] = useState([]);

    const onChange = (e) => {
        setsearchTerm(e.target.value);
    }

    const onClickSuggestion = (e) => {
        let newSelected = selected.slice();
        newSelected.push(e);
        setSelected(newSelected);
    }

    const onClickSelected = (e) => {

    }

    //console.log((props.allpossiblesuggestions) );

    return (
        <div className="SearchField"> 
            <div className="Title">
                Choose {props.title}:
            </div>
            <div>
                <div>
                    Selected:
                </div>
                <div>
                    {
                        selected
                        .map((sug) => 
                            (<Selected title={sug} removeFromSelected={onClickSelected}/>)
                        )
                    }
                </div>
            </div>
            <div className="SearchTextField">
                <input type="text" value={searchTerm} onChange={onChange} placeholder="Enter search term here">

                </input>
            </div>
            <div className="Suggestions">
            {
                props
                .allpossiblesuggestions
                .filter((sug) => {
                const subString = searchTerm.toString();
                const fullName = sug.toString();

                return (
                    //fullName
                    subString 
                    && fullName.includes(subString) 
                    && fullName !== subString
                    && !selected.includes(sug)
                );
                })
                .map((sug) => 
                    (<Suggestion title={sug} updateSelected={onClickSuggestion}/>)
                )
            }
            </div>
        </div>
    )
}