import React from 'react';
import styled from 'styled-components';
//import {Boarder} from './CardStyles';
 const Boarder = styled.h2`
    color: red;
    font-family: cursive;
    font-size: 35px;
`;
const Border2 = styled.div `
    border: 2px solid red;
    background-color: purple;
    margin: 0 auto;
    width: 400px;
`;
export default function Chars(props){
    console.log(props.person.name)
    return(
        <Border2 className="peopleCard">
            <h1>Name:{props.person.name}</h1>
            <Boarder> Age:{props.person.birth_year}</ Boarder>
        </Border2>
 )
}
