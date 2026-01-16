import React, { use } from 'react';
import Country from '../Country';

const Countries = ({countriesPromise}) => {
    const data = use(countriesPromise)
    const countries = data.countries;
    console.log(countries)
    return (
        <div>
            <h3>In the Country : {countries.length}</h3>
            {
                countries.map(country => <Country country ={country}></Country>)
            }
        </div>
    ); 
};

export default Countries;