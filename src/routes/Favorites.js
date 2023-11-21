import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/imagesSlice';

export default function Favorites() {
  const favorites = useSelector((state) => state.images.favorites);
  const dispatch = useDispatch();

  const handleUnfavorite = (imageId) => {
    dispatch(removeFavorite(imageId));
  };

  return (
    <div className="favorites-grid">
      {favorites.map((favorite, index) => (
        <div key={index} className="favorite-card">
          <img
            src={favorite.url}
            alt="Favorited cat"
            width="300"
            height="300"
          />
          <button onClick={() => handleUnfavorite(favorite.id)}>
            Unfavorite
          </button>
        </div>
      ))}
    </div>
  );
}
