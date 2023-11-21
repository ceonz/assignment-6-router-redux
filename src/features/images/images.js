import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementImageIndex, addFavorite } from '../imagesSlice'

export function getCatImages() {
  const catImages = useSelector((state) => state.catImages.setCurrentImageIndex)
  const dispatch = useDispatch();

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

export function handleCreateFavorite(){
  const favorites = useSelector((state) => state.favorites.setFavorites)
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Add image to favorite"
          onClick={() => dispatch(addFavorite())}
        >
          Favorite
        </button>
        <span>{favorites}</span>
      </div>
    </div>
  )
}