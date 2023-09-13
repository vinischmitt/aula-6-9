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
    <div>{filme.original_tittle} </div>
    </>
  );
}