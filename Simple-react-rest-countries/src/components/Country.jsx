import React from 'react';

const Country = ({country}) => {
    return (
        <div className='card'>
            <h3>Country Name : {country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            
        </div>
    );
};

export default Country;