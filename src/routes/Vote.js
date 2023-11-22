import React from 'react';
import { getAllImages } from "../apis";
import { useSelector, useDispatch } from 'react-redux';
import { castVote, incrementImageIndex, setCatImages, addVoteToHistory } from '../features/imagesSlice';



export default function Vote(){
  const dispatch = useDispatch();

  const catImages = useSelector((state) => state.images.catImages);
  const currentImageIndex = useSelector((state) => state.images.currentImageIndex);
  const voteHistory = useSelector((state) => state.images.voteHistory);


  function handleVote(catId, value){
    const imageUrl = catImages.find((cat) => cat.id === catId)?.url;
    if (imageUrl) {
      dispatch(castVote(catId, value, imageUrl));
      dispatch(addVoteToHistory({ catId, value, imageUrl }));
      showNextImage();
    } else if (catImages.length === 0) {
      getAllImages().then((images) => {
        dispatch(setCatImages(images));
        showNextImage();
      });
    } else {
      showNextImage();
    }
  };

  function showNextImage(){
    dispatch(incrementImageIndex());
  }

  return (
    <div className="vote-grid">
       {catImages.length === 0 && (
          <button onClick={() => handleVote(-1, 0)}>Start Voting</button>
        )}
        {catImages.length > 0 && catImages[currentImageIndex] && (
          <div key={catImages[currentImageIndex].id} className="voting-card">
            <img
              src={catImages[currentImageIndex].url}
              alt="Random cat"
              width="300"
              height="300"
          
            />
            <div>
              <button onClick={() => handleVote(catImages[currentImageIndex].id, 1)}>Like</button>
              <button onClick={() => handleVote(catImages[currentImageIndex].id, -1)}>Dislike</button>
            </div>
          </div>
        )}
      {catImages.length > 0 && currentImageIndex >= catImages.length && (
        <div>
          <p>No more images to vote on. Fetch more?</p>
          <button onClick={showNextImage}>Fetch More</button>
        </div>
      )}
      <div>
        <h2>Vote History</h2>
        {voteHistory.map((vote) => (
          <div key={vote.catId}>
            <img src={vote.imageUrl} alt="Cat" width="100" height="100" />
            {vote.value === 1 ? <span> Liked</span> : <span> Disliked</span>}
          </div>
        ))}
      </div>
    </div>
  );
};