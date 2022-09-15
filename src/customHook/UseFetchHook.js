import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseFetchHook(url) {
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
        setFilteredData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error, filteredData, setFilteredData }
}

export default UseFetchHook