import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath,queryTerm);

  useEffect(()=>{
    document.title = `Search results for ${queryTerm} / Cinemate`;
  })


  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0 ? `No results found for ${queryTerm}`: `Results for ${queryTerm}`}

        </p>
      </section>

      <section className="max-w-7xl mx-auto pt-7">

        <div className="flex justify-start flex-wrap">

          {movies.map((movie)=>{
            return <Card key={movie.id} movie = {movie}/>
          })}

        </div>

      </section>

    </main>
  )
}
