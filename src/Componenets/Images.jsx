import React, { useContext } from "react";
import pixabayContext from "../Context/PixabayContext";


const Images = () => {
  const { ImageData } = useContext(pixabayContext);
  return (
    <>
    <div className="container my-5">
      <div className="flex">
        {ImageData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="image" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Images;
