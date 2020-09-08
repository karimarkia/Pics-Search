import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import ImagesList from './components/ImagesList'

const App = () => {
  const [images, setImages] = useState([])
  
  const onSearch = async (term) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID l-5_XJvtuh498pJ17unl20I7S4l0dYlH2X39APfQU24',
      },
    })
    setImages(response.data.results)
  }

  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <Search onUserSearch={onSearch} />
      <ImagesList images={images} />
    </div>
  )
}

export default App
