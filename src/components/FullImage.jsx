import React from 'react'
import "../styles/FullImage.css"

const FullImage = ({image, closeFullImage}) => {
  return (
    <div className="container" onClick={closeFullImage}>
        <div className="full-img-container">
            <img className="full-img" src={image} />
        </div>
    </div>
  )
}

export default FullImage