import { createContext, useState } from "react";
import axios from "axios";
export const MovieContext=createContext();

export const MovieProvider=({children})=>{
    const [movie, setMovie] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function onChangeHandler(e){
        setInputValue(e.target.value);
    }

    const getMovieList = async () => {
        if (inputValue == "") {
          const res = await axios(
            "https://api.themoviedb.org/3/movie/popular?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1"
          );
          setMovie(res?.data?.results);
        } else {
          const response = await axios(
            "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false",
            { params: { query: inputValue } }
          );
          setMovie(response?.data?.results);
        }
      };

    return (<MovieContext.Provider value={{onChangeHandler, getMovieList, inputValue, movie}}>
        {children}
    </MovieContext.Provider>)
}