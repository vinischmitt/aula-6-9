export interface FilmeInterface {
  original_tittle: string;
  release_date: string;
  poster_path: string;
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({ filme }: FilmeProps) {
  return (
    <>
    <img src={'https://image.tmdb.org/t/p/w154/' + filme.poster_path} />
    <div>{filme.original_tittle} </div>
    </>
  );
}