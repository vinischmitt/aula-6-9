import { useEffect, useState } from 'react';
import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState([]);

  async function handleLoadMovies() {
    const data = await getDiscoverMovies();
    setMovies(data.results);
  }

  useEffect(() => {
    handleLoadMovies();
  }, []);

  return (
    <>
      <h1>Fernet com coca</h1>
      <hr />
      <h2>Seus Favoritos</h2>
      <hr />
      <h2>Veja outros lançamentos</h2>
      {movies?.map((movie) =>{
        return <div>{movie.original_tittle} </div>
      })}
    </>
  );
} 