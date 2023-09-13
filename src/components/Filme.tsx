export interface FilmeInterface {
  original_tittle: string;
  release_date: string;
  poster_patch: string;
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({ filme }: FilmeProps) {
  return (
    <>
    <img src={'https://image.tmdb.org/t/p/w154/' + filme.poster_patch}/>
    <div>{filme.original_tittle} </div>
    </>
  );
}