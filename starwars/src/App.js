import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from "./components/Card"

function App() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    console.log('React Wars');

    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setPeoples(response.data.results);
      })
      .catch(error => {
        console.log('this is an error message', error);
      });

  }, []);


  return (
    <div className="App">
       <h1 className="Header">React Wars</h1>
       {peoples.map((person, id ) => {
         return(
          <Card key={id} 
          person={person} /> 
         )
       })
      }
    </div>
  );
}
export default App;
