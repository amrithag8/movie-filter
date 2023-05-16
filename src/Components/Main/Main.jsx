import "./Main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { useContext } from "react";
import { MovieContext } from "../../Contexts/MovieContext";
import { Link } from "react-router-dom";
const Main = () => {
  
const{inputValue, movie, onChangeHandler, getMovieList}=useContext(MovieContext);
  

  useDebounce(getMovieList, inputValue, 500);
  

  return (
    <div className="main">
      <div className="input">
        <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" />
        <input
          type="text"
          className="input-text"
          onChange={(e)=>onChangeHandler(e)}
        />
      </div>

      <div className="movie-list">
        {movie.map((item) => {
          return (
            item.poster_path && 
              (<Link to={`/movie/${item.id}`}> <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              key={item.id}/>
              </Link>
          )
          );
        })}
      </div>
    </div>
  );
};

export default Main;
