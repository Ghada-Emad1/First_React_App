import React, { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//3ca8f44 
const ApI_URL='http://www.omdbapi.com?apikey=3ca8f44';

const App=()=>{
   const [movies,setMovies]=useState([]);
   const [search,setSearch]=useState('');
    const searchMovies=async(title)=>{
      const response=await fetch(`${ApI_URL}&s=${title}`);
      const data=await response.json();
      //console.log(data.Search);
      setMovies(data.Search);
    }
    useEffect(()=>{
      searchMovies('spiderman')
    },[])
    return(
        <div className="app">
            <h1>MOvieLand</h1>
            <div className="search">
                <input type="text" placeholder="search for movie"
                value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                 <img src={SearchIcon} alt="" onClick={()=>{searchMovies(search)}}/>
            </div>
            
            {
              movies.length>0?(
                <div className="container">
                {movies.map((movie)=>(
                  <MovieCard movie={movie}/>
                ))}
            </div>
              ):(
                <div className="empty">
                  <h1>No movies found</h1>
                </div>
              )
              
                
              
            }

            
        </div>
        
    )

}
export default App;