import React from "react";
import SearchField from "./Components/SearchField";

function App() {

  //const cars = ["Saab", "Volvo", "BMW"];
  const subjects_mock = ["1", "2", "3"];
  /*
  const subjects_mock = {
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
  }
  */
  /*
  const subjects_mock = {
    "10000": "C Fundamentals",
    "10001": "Java Fundamentals",
    "10002": "C# Fundamentals"
  }
  */

  const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  

  return (
    <div className="App">
      <div>
        Course reco's x
      </div>
      <SearchField title="Subjects" allpossiblesuggestions={subjects_mock} />
    </div>
  );
}

export default App;
