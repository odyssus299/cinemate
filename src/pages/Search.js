import { useSearchParams } from "react-router-dom";


import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";

import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search Result For ${queryTerm} / Cinemate`);

  return (
    <main>
        <section>
          <p className="text-3xl text-gray-700 dark:text-white">{movies.length > 0 ? `Results for ${queryTerm}` : `No results found for ${queryTerm}`}</p>
        </section>
        <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap">
              {movies.map((movie) => {
                return <Card key={movie.id} movie={movie}/>
              })}
            </div>
        </section>
    </main>
  )
}
