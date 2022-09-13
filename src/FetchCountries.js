import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllCountries from './AllCountries'
function FetchCountries() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getData = async () => {
        try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setData(response.data);
        setError(null);
        } catch (err) {
        setError(err.message);
        setData(null);
        } finally {
        setLoading(false);
        }
    };
    getData();
  }, []);

  return (
    <div>
      <AllCountries data={data} />
    </div>
  )
}

export default FetchCountries