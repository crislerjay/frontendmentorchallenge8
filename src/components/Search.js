import React from 'react'

function Search({setQuery}) {
  return (
    <>
      <input type="text" placeholder='Search for a country...' onChange={(e) => setQuery(e.target.value)} />
    </>
  )
}

export default Search