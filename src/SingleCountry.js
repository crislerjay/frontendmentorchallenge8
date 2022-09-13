import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

function SingleCountry() {
    const [data, setData] = useState(null)
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
                setData(response.data);
                console.log(response.data)
            } catch (err) {
                console.log(err);
            }
        };
        getData()
    }, [id])

  return (
    <div>
        <>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
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