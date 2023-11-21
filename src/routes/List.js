import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../apis";
import { Link } from "react-router-dom";
import { setCatImages, addFavorite, removeFavorite } from "../features/imagesSlice";

export default function List() {
  const dispatch = useDispatch();
  const catImages = useSelector((state) => state.images.catImages);

  const favorites = useSelector((state) => state.images.favorites);

  const handleFavorite = (catImage) => {
    const isFavorited = favorites.some(fav => fav.id === catImage.id);
    if (isFavorited) {
      dispatch(removeFavorite(catImage.id));
    } else {
      dispatch(addFavorite(catImage));
    }
  };

  function getCatImages() {
    getAllImages()
      .then((data) => {
        dispatch(setCatImages(data));
      });
  }

  return (
    <div>
      <button onClick={getCatImages}>Get Cat Images</button>

      <div className="image-grid">
        {catImages.map((catImage) => (
          <div key={catImage.id} className="cat-card">
            <Link to={`/list/${catImage.id}`}>
              <img
                src={catImage.url}
                alt="Random cat"
                width="300"
                height="300"
              />
            </Link>
            <button onClick={() => handleFavorite(catImage)}>
              {favorites.some(fav => fav.id === catImage.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
