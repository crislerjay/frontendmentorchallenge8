import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import UseFetchHook from '../customHook/UseFetchHook';

function SingleCountry() {

  let { id } = useParams();
  let navigate = useNavigate();
  const { data, loading, error } = UseFetchHook(`https://restcountries.com/v3.1/name/${id}`)

  return (
    <div>
        <button onClick={() => navigate(-1)}>Back</button>
        {loading && <h1>Loading...</h1>}
        {error && console.log(error)}
        <div className='singleCountryBlk'>{data && 
            data.map(country => (
                <div className='singleCountry wrap' key={country.name.common}>
                    <div className='imgBlk'><img src={country.flags.png} /></div>
                    <div className='detailsBlk'>
                        <h2 className='title'>{country.name.common}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SingleCountry