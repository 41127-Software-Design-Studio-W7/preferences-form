import React from "react";
import SearchField from "./Components/SearchField";

function App() {

/*
  const subjects_mock = [
    
    "10000": {
      "name": "C Fundamentals",
      "area": "Software Engineering"      
    },
    "10001": {
      "name": "Java Fundamentals",
      "area": "Software Engineering"      
    },
    "10002": {
      "name": "C# and .NET Fundamentals",
      "area": "Software Engineering"      
    }
]
*/

const subjects_mock = [
  { 
    "id": 10000,
    "name": "C Fundamentals",
    "area": "Software Engineering"      
  },
  {
    "id" : 10001,
    "name": "Java Fundamentals",
    "area": "Software Engineering"      
  },
  {
    "id": 10002,
    "name": "C# and .NET Fundamentals",
    "area": "Software Engineering"      
  }
]

const possible_subs = [10000, 10001, 10002, 10003, 10004, 10005]

  return (
    <div className="App">
      <div>
        Course reco's x
      </div>
      <SearchField title="Completed Subjects" allpossiblesuggestions={possible_subs} />
    </div>
  );
}

export default App;
