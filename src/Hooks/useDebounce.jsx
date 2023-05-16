import { useEffect } from "react";
const useDebounce=(getMovieList, inputValue, delay)=>{
    useEffect(() => {
        const timeout=setTimeout(()=>{
            getMovieList();
        }, delay)

        return(()=>{
            clearTimeout(timeout);
        })
        
      }, [inputValue]);
}

export default useDebounce;