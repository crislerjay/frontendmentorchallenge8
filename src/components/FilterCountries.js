import React, { useEffect } from 'react'

function FilterCountries({ data, filterQuery, setFilterQuery, setFilteredData }) {

  useEffect(() => {
    if (filterQuery === 'All') {
      setFilteredData(data)
      return
    }
    const filter = data.filter((country) => country.region.includes(filterQuery))
    setFilteredData(filter)
  }, [filterQuery])

  return (
    <>
      <select
        onChange={(e) => {setFilterQuery(e.target.value)}}
        className="custom-select"
        aria-label="Filter Countries By Region">
        <option value="All">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  )
}

export default FilterCountries