import React from 'react';

export default function Chars(props){
    console.log(props.peoples.name)
    return(
        <div className="peopleCard">
            <h3>Name:{props.peoples.name}</h3>
            <h2> Age:{props.peoples.birth_year}</h2>
        </div>
 )
}