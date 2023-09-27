import './Filme.css'
import { db, AddItem } from '../../services/firebase';

export interface FilmeInterface {
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  id: string;
}
export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({filme} : FilmeProps) {
  function handleSaveMovie(){
    console.log(filme);
    AddItem("movies", String(filme.id), filme).then(result => {
      alert('Filme salvo: ' +filme.original_title);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  

  return (  
  <>
  <div className="filme">
  <img src={"https://image.tmdb.org/t/p/w154" + filme.poster_path}/>
  <small>{filme.vote_average} </small> 
  <button onClick={handleSaveMovie}>+ adicionar</button>
  <div> 
   <b> {filme.original_title} </b>
    {filme.release_date}
  </div>
  </div>
  </>
  );
}