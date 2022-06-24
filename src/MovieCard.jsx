import React from "react";



function MovieCard({movie}) {
  return (
    <div className='movie'>
                  <diV >

                    <p>{movie.Year}</p>
                  </diV>
                  <diV>
                    <img  src={movie.Poster!=='N/A'? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
                  </diV>

                  <div>
                    <span>{movie.Type}</span>
                     <h3>{movie.Title}</h3>
                  </div>
                 </div>
    
  )
}

export default MovieCard