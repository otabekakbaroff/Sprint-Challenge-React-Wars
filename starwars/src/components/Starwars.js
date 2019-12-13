import React, { useState, useEffect} from 'react';
import StarwarsCard from './StarwarsCard';
import axios from 'axios';

const url='https://swapi.co/api/people/';
export default function Starwars(props){
    const [state, setState]=useState([]);
    useEffect(()=>{
        axios.get(url).then(response=>{
            // console.log('result: '+response.data.results);
            // console.log(response.data.results);
            const characters=[response.data.results][0];
            // console.log(characters);
            setState(characters);
        })
        .catch(err=>console.log(err))
    },[])
    console.log(state);
    return (
        <div>
            <h3>Just a test</h3>
            {state.map((item,index)=>{
                return <StarwarsCard 
                key={item.name}
                item={item} 
                />
            })}
        </div>
    )
}
