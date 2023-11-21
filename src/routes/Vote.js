import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { castVote, setCurrentImageIndex } from '../imagesSlice';


export default function Vote(){
  const dispatch = useDispatch();

  const catImages = useSelector((state) => state.images.catImages);
  const currentImageIndex = useSelector((state) => state.images.currentImageIndex);
  const voteHistory = useSelector((state) => state.images.favorites);

  const handleVote = (catId, value) => {
    const imageUrl = catImages.find((cat) => cat.id === catId)?.url;
    if (imageUrl) {
      dispatch(castVote(catId, value, imageUrl));
      showNextImage();
    }
  };

  const showNextImage = () => {
    const newIndex = currentImageIndex + 1;
    const shouldResetIndex = newIndex >= catImages.length;

    dispatch(setCurrentImageIndex(shouldResetIndex ? 0 : newIndex));
  };

  return (
    <div className="vote-grid">
      {catImages.length === 0 ? (
        <button onClick={showNextImage}>Start Voting</button>
      ) : (
        catImages[currentImageIndex] && (
          <div key={catImages[currentImageIndex].id} className="voting-card">
            <img
              src={catImages[currentImageIndex].url}
              alt={`Cat ${currentImageIndex + 1}`}
              width="300"
              height="300"
              className=""
            />
            <div>
              <button onClick={() => handleVote(catImages[currentImageIndex].id, 1)}>
                Like
              </button>
              <button onClick={() => handleVote(catImages[currentImageIndex].id, -1)}>
                Dislike
              </button>
            </div>
          </div>
        )
      )}
      {catImages.length > 0 && currentImageIndex >= catImages.length && (
        <div>
          <p>No more images to vote on. Fetch more?</p>
          <button onClick={showNextImage}>Fetch More</button>
        </div>
      )}
      <div>
        <h2>Vote History</h2>
        <ul>
          {voteHistory.map((vote, index) => (
            <li key={index}>
              {vote.imageUrl && (
                <img
                  src={vote.imageUrl}
                  alt={`Cat ${index + 1}`}
                  width="50"
                  height="50"
                  className={vote.value > 0 ? 'liked' : 'disliked'}
                />
              )}
              {vote.value > 0 ? ' Liked' : ' Disliked'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
