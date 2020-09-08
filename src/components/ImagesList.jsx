import React from 'react'

import classes from './ImagesList.module.css'
import ImageCard from './ImageCard'

const ImagesList = ({ images }) => {
  const image = images.map(img => {
    return <ImageCard key={img.id} image={img} />
  })
  return <div className={classes.imageList}>{image}</div>
}

export default ImagesList
