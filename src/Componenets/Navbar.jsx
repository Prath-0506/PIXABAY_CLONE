import React, { useContext } from "react";
import pixabayContext from "../Context/PixabayContext";

const Navbar = () => {
  const { fetchImageByCategory,setQuery } = useContext(pixabayContext);
  return (
    <>
      

      <>
        <div className="container text-center my-3">
          <button
            onClick={() => fetchImageByCategory("nature")}
            type="button"
            className="btn btn-outline-primary"
           
          >
            Nature
          </button>
          <button
            onClick={() => fetchImageByCategory("science")}
            type="button"
            className="btn btn-outline-secondary  mx-3"
            
          >
            Science
          </button>
          <button
            onClick={() => fetchImageByCategory("education")}
            type="button"
            className="btn btn-outline-success  mx-3"
          
          >
            Education
          </button>
          <button
            onClick={() => fetchImageByCategory("feelings")}
            type="button"
            className="btn btn-outline-danger  mx-3"
            
          >
            Feelings
          </button>
          <button
            onClick={() => fetchImageByCategory("health")}
            type="button"
            className="btn btn-outline-warning  mx-3"
            
          >
            Health
          </button>
          <button
            onClick={() => fetchImageByCategory("animals")}
            type="button"
            className="btn btn-outline-light  mx-3"
            
          >
            Animals
          </button>
          <button
            onClick={() => fetchImageByCategory("music")}
            type="button"
            className="btn btn-outline-primary  mx-3"
           
          >
            music
          </button>
        </div>
      </>
      <>
      <div className="container" style={{width:"600px"}}>
         <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control bg-dark text-light" ></input>
      </div>
      </>
    </>
  );
};

export default Navbar;
