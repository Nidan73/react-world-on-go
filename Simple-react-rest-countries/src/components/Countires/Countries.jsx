import React, { use, useState } from 'react';
import Country from './Country';
import "./Countries.css"
const Countries = ({countriesPromise}) => {
    
    const [visitedCountries,setvisitedCountries]=useState([]);

    const handlevisitedCountries = (country) =>{
         console.log(country)
         const newVisit = [...visitedCountries,country];
         setvisitedCountries(newVisit);
    }
    const data = use(countriesPromise)
    const countries = data.countries;

    return (
        
        <div >
        <h3>In the Countires : {countries.length}</h3>
        <h3>Visted countries : {visitedCountries.length}</h3>
        <ol>
            {
                visitedCountries.map(country => <li>{country.name.common}</li> )
            }
        </ol>
           <div className='countries'> {
                countries.map(country => 
                <Country key={country.cca3.cca3} 
                handlevisitedCountries =
                {handlevisitedCountries} 
                country ={country}></Country>)
            }</div>
        </div>
    ); 
};

export default Countries;