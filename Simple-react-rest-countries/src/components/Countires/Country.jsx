import React, { useState } from 'react';
import './country.css'
const Country = ({country , handlevisitedCountries}) => {
    const [Visited, setVisit] = useState(false);

    const toggle = () => {
     setVisit(!Visited);
     handlevisitedCountries(country);
    } 
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name : {country.name.common}</h3>
            <h3>Population : {country.population.population}</h3>
            <button onClick={toggle}>{Visited ? "Not Visited" : "Visited"}</button>
        </div>
    );
};

export default Country;