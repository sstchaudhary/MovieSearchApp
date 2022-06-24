import React, { useEffect, useState } from 'react';
import  "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
//8bdf7ba
 const API_URL=`https://www.omdbapi.com?apikey=${process.env.REACT_APP_SECRET_KEY}`;

//  const movie1={
//   Poster: "N/A",
//   Title: "Amazing Spiderman Syndrome",
//   Type: "movie",
//   Year: "2012",
//   imdbID: "tt2586634"


//  }

function App() {
        const [movies,setMovies]=useState([]);
        const [searchTerm,setSearchTerm]=useState('');
        useEffect(()=>{
          searchMovies();
                      
     
               },[searchTerm]);

      const searchMovies=async(title)=>{
              const response=await fetch(`${API_URL}&s=${title}`);
              const data=await response.json();
               setMovies(data.Search);
      }

     
  return (
    <div className='app'>
      <h1>MovieWorld</h1>
        <div className='search'>
          <input 
           placeholder='search for movies'
          onChange={(e)=>setSearchTerm(e.target.value)}
          
          value={searchTerm}
          />
           <img src={SearchIcon} alt="search" 
              onClick={()=>searchMovies(searchTerm)}
             
                />
        </div>

           {
                 movies?.length>0 
                 ?(<div className='container'>
                      {movies.map((movie)=>(
                           <MovieCard movie={movie}/>
                 ))}
                   </div>
                  ):(
                <div className='empty'>
                   <h2>no movies found </h2>
                </div>

            )
       }

       </div>
  );
}

export default App