import React, { useState } from "react";
import { movies } from "./Data";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  const filteredList = (cat)=>{
    const updated = movies.filter((movie)=>movie.category==cat);
    setMovieList(updated);
  }
  return (
    <div id="container" style={{}}>
      <div style={{display:'flex',justifyContent:'center',alignContent:'center',margin:'30px',gap:'20px'}}>
        <button type="button" onClick={()=>setMovieList(movies)}  class="btn btn-outline-primary">
          All
        </button>
        <button type="button" onClick={(event)=>filteredList(event.target.textContent)} class="btn btn-outline-secondary">
          Action
        </button>
        <button type="button" onClick={(event)=>filteredList(event.target.textContent)} class="btn btn-outline-success">
          Thriller
        </button>
        <button type="button" onClick={(event)=>filteredList(event.target.textContent)} class="btn btn-outline-danger">
          Animation
        </button>
        <button type="button" onClick={(event)=>filteredList(event.target.textContent)} class="btn btn-outline-warning">
          Horror
        </button>
        <button type="button" onClick={(event)=>filteredList(event.target.textContent)} class="btn btn-outline-info">
          Drama
        </button>
        <button type="button" onClick={(event)=>filteredList(event.target.textContent)} class="btn btn-outline-light">
          Sci-Fi
        </button>
      </div>
      <div
        id="all-card-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}
      >
        {movieList.map((data) => (
          <div id="single-card-container" style={{ width: "250px" , height:'400px',display:'flex',flexDirection:'column',gap:'25px'}}>
            <div id="poster-img" style={{}}>
              <img
                src={data.poster_path}
                alt="poster-img"
                style={{
                  height: "300px",
                  width: "250px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              id="textContainer"
              style={{ textAlign: "center" }}
            >
              <h5
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "normal",
                  fontFamily: "sans-serif",
                }}
              >
                {data.title}
              </h5>
              <p
                style={{
                  fontSize: "1rem",
                  marginTop:'5px',
                  fontFamily: "sans-serif",
                }}
              >
                {data.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
