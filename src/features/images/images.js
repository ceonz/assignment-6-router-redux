import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementImageIndex } from '../imagesSlice'

export function getCatImages() {
  const catImages = useSelector((state) => state.catImages.setCurrentImageIndex)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementImageIndex())}
        >
          Increment
        </button>
        <span>{catImages}</span>
      </div>
    </div>
  )
}