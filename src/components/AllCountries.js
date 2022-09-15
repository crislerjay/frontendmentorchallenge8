import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FilterCountries from './FilterCountries';
import Search from './Search';
import UseFetchHook from '../customHook/UseFetchHook';

function AllCountries() {
  const { data, loading, error, filteredData, setFilteredData } = UseFetchHook('https://restcountries.com/v3.1/all');
  const [query, setQuery] = useState('')
  const [filterQuery, setFilterQuery] = useState('All')

  return (
    <div className='main'>
      <div className='wrap'>
        <div className='queryBlk'>
          <Search setQuery={setQuery} />
          <FilterCountries data={data} filterQuery={filterQuery} setFilterQuery={setFilterQuery} setFilteredData={setFilteredData} />
        </div>

        {loading && <h1>Loading...</h1>}

        {error && console.log(error)}

        <div className='contriesBlk'>
          <ul className='countries'>
            {filteredData && filteredData.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
              .map((country) => (
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
    </div>
  )
}

export default AllCountries