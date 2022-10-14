import React from "react";

import { useState, useEffect } from "react";

export default function SearchField() {
    const [searchTerm, setsearchTerm] = useState("");

    return (
        <div>
            <div>
                Search:
            </div>
            <input type="text" value={searchTerm} placeholder="Enter search term here">

            </input>
        </div>
    )
}