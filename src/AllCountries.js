import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function AllCountries({data}) {
  return (
    <div className='contriesBlk'>
      <div className='wrap'>
        <ul className='countries'>
            {data && data.map((country) => (
              <li className='country' key={country.name.common}>
                <Link to={`/name/${country.name.common}`}>
                  <p className='img'><img src={country.flags.png} /></p>
                  <div className='details'>
                    <p className='title'>{country.name.common}</p>
                    <p className='txt'><span>Population: </span>{country.population}</p>
                    <p className='txt'><span>Region: </span>{country.region}</p>
                    <p className='txt'><span>Capital: </span>{country.capital}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default AllCountries