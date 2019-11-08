import React from 'react';
import './App.css';
import axios from "axios";
import {useEffect, useState} from 'react';
import CardContain from './components/CardContain';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [ppl,setPpl]= useState([]);

  useEffect(() => {
    console.log('TEST');

  //const getCharacters = () => {
    axios
    .get('https://swapi.co/api/people') 
    .then (response => {
      console.log(response.data.results);
      setPpl(response.data.results)
    })
    .catch(error => {
      console.log('failed retrival', error)
    })
   }, []);
    
    return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      < CardContain />
    </div>
  );
}

export default App;
