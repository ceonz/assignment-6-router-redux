import { useState } from "react";
import { getAllImages } from "../apis";

export default function List() {
  const [catImages, setCatImages] = useState([]);

  function getCatImages() {
    getAllImages()
      .then((data) => {
        setCatImages(data);
        //setCurrentImageIndex(0);
      });
  }

  return (
    <div>
      <button onClick={getCatImages}>Get Cat Images</button>

      <div className="image-grid">
        {catImages.map((catImage) => {
          // TODO: Utilizing redux add favorite feature
          // const isFavorited = favorites.some(fav => fav.image_id === catImage.id);
          return (
            <div key={catImage.id} className="cat-card">
              <img
                src={catImage.url}
                alt="Random cat"
                width="300"
                height="300"
              />
              {/* <button onClick={() => isFavorited ? handleDeleteFavorite(catImage.id) : handleCreateFavorite(catImage.id)}>
                {isFavorited ? 'Unfavorite' : 'Favorite'}
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
