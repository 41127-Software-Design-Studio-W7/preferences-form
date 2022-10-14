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
    "id": 10001,
    "name": "C Intermediate",
    "area": "Software Engineering"      
  },
  
  {
    "id" : 10020,
    "name": "Java Fundamentals",
    "area": "Software Engineering"      
  },
  {
    "id" : 10021,
    "name": "Java Intermediate",
    "area": "Software Engineering"      
  },
  {
    "id": 10030,
    "name": "C# and .NET Fundamentals",
    "area": "Software Engineering"      
  },
  {
    "id" : 10031,
    "name": "Java Intermediate",
    "area": "Software Engineering"      
  },
  {
    "id": 10030,
    "name": "Machine Learning Fundamentals",
    "area": "Data Science"      
  },
  {
    "id" : 10031,
    "name": "Machine Learning Intermediate",
    "area": "Data Science"      
  },
  {
    "id": 10030,
    "name": "Embedded Systems Fundamentals",
    "area": "Electrical Engineering"      
  },
  {
    "id" : 10031,
    "name": "Embedded Systems Intermediate",
    "area": "Electrical Engineering"      
  },
]

const possible_subs = [10000, 10001, 10020, 10021, 10030, 10031]

const areas_mock = [
  { 
    "id": 100,
    "name": "Software Engineering"
  },
  {
    "id" : 200,
    "name": "Electrical Engineering"      
  },
  {
    "id": 300,
    "name": "Data Science", 
  }
]

//const possible_areas = [100, 200, 300]
const possible_areas = ["Software Engineering", "Electrical Engineering", "Data Science"]

  return (
    <div className="App">
      <div>
        <h1>Course reco's x</h1>
        <hr></hr>
        <hr></hr>
      </div>
      <SearchField title="Completed Subjects" allpossiblesuggestions={possible_subs}/>
      <SearchField title="Areas of Interest" allpossiblesuggestions={possible_areas}/>
    </div>
  );
}

export default App;
