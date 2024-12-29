import React from 'react';
import Movies from '../components/movieData';
import '../pages/Styles/Home.css';
import MovieSlider from '../components/MovieSlider'
function Home() {

  return (
    <div className="home">
      <MovieSlider />
      {Movies.map((movie, index) => (
        <div key={index} className='card-container'>
          <h2 className='cart-title'>{movie.title} ({movie.releaseYear})</h2>
          <p className='cart-ratings'>Rating: {movie.rating}</p>
          <p className='cart-cast'>Cast: {movie.cast.join(', ')}</p>
          <img src={movie.image} alt={movie.title} style={{ width: '200px', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
}

export default Home;
