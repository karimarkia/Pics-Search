import React, { useRef, useEffect, useState } from 'react'

const ImageCard = ({ image }) => {
  const [span, setSpan] = useState('')
  const imageRef = useRef('')

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans)
  }, [])

  const setSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    setSpan(spans)
  }

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} alt={image.description} src={image.urls.regular} />
    </div>
  )
}

export default ImageCard