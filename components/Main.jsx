import Details from "./Details";
import Thumbnail from "./Thumbnail";

function Main({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => {
        return (
          <div>
            <Thumbnail backdrop={result.backdrop_path} poster={result.poster_path} />
            <Details result={result} />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
