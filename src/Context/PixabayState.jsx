import React, { useEffect, useState } from "react";
import pixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const api_key = "52591455-4e06bb0de17220e2d1cb19c95";
  const [ImageData, setImageData] = useState([]);
  const [query, setQuery] = useState('london');
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

const fetchImageByCategory = async (cat) => {
  const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
}

  return (
    <pixabayContext.Provider value={{ImageData, fetchImageByCategory,setQuery}}>
      {props.children}{" "}
    </pixabayContext.Provider>
  );
};

export default PixabayState;
