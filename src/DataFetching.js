import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
  const [posts, setPosts] = useState([])
  const [name, setName] = useState('peru')

  useEffect(() => {
      axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h2>{posts && 
      posts.map(post => (
        post.name.common
      ))}</h2>
      {/* <ul>
        {
          posts.map(post => (
            <li key={post.name.common}>
              <h2>{post.name.common}</h2>
            </li>
          ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetching