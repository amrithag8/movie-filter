import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import "./Moviedetailspage.css";

export const Moviedetailspage=()=>{
    const {id}=useParams();
    const{movie}=useContext(MovieContext);
    console.log(movie);
    return(
        <div className="moviedetails">
        {movie.map((item)=>{
                if(item.id===Number(id)){
                    return (<>
                    <h1>{item.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      key={item.id}/>
                    <p>{item.overview}</p>
                    <h2>Review rating: {item.vote_average} ({item.vote_count} votes)</h2>
                    </>
                    )
                }
            })
        }
        </div>
    )
}