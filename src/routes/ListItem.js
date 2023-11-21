import { useParams } from "react-router-dom"
import { getImage } from "../apis";
import { useEffect, useState } from "react";

export default function ListItem() {
  const { id } = useParams()
  const [catImage, setCatImage] = useState(null);

  function getCatImage() {
    getImage(id)
      .then((data) => {
        setCatImage(data);
        //setCurrentImageIndex(0);
      });
  }

  useEffect(() => {
    getCatImage()
  }, [])

  if (!catImage) {
    return (
      <div>
        loading...
      </div>
    )
  }


  return (
    <div>
      <img
        src={catImage.url}
        alt="Cat"
        width="300"
        height="300"
      />
    </div>
  )
}