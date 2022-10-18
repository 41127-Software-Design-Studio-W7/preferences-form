import React from "react";
import SearchField from "./Components/SearchField/SearchField";
import Ranking from "./Ranking/Ranking";

function App() {


/*
Mock data
Subjects
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

/*
Mock data
Areas of Interest
*/
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
const possible_areas = ["Software Engineering", "Electrical Engineering", "Data Science"]

/*
Mock data
Preferences - assessment type
*/
const assessment_areas = ["Hand In Assignments", "Presentations", "Online Quizzes", "Examinations"]

  return (
    <div className="App">
      <div>
        <h1>Course reco's x</h1>
        <hr></hr>
        <hr></hr>
      </div>
      <SearchField title="Completed Subjects" allpossiblesuggestions={possible_subs}/>
      <SearchField title="Areas of Interest" allpossiblesuggestions={possible_areas}/>
      <Ranking title="Assessment Type" rankingitems={assessment_areas} />

      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <input type="range" min={0} max={100} step="1" list="steplist"></input>

      <hr></hr>
      <datalist id="steplist">
          <option>0</option>
          <option>25</option>
          <option>50</option>
          <option>75</option>
          <option>100</option>
      </datalist>


      

    </div>
    
  );
}

export default App;
