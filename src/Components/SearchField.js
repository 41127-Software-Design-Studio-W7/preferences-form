import React from "react";

import { useState, useEffect } from "react";

export default function SearchField() {

    const [searchTerm, setsearchTerm] = useState("");

    const onChange = (e) => {
        setsearchTerm(e.target.value);
        console.log(searchTerm);
    }

    return (
        <div>
            <div>
                Search:
            </div>
            <input type="text" value={searchTerm} onChange={onChange} placeholder="Enter search term here">

            </input>
        </div>
    )
}