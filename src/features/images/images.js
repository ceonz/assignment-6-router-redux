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

export function HandleVote() {
  const catImages = useSelector((state) => state.images.catImages);
  const currentImageIndex = useSelector((state) => state.images.currentImageIndex);
  const dispatch = useDispatch();

  const handleVote = (value) => {
    const currentCat = catImages[currentImageIndex];
    if (currentCat) {
      dispatch(castVote({
        catId: currentCat.id,
        value,
        imageUrl: currentCat.url,
      }));
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleVote(1)}>
          Like
        </button>
        <button onClick={() => handleVote(-1)}>
          Dislike
        </button>
      </div>
    </div>
  );
}
