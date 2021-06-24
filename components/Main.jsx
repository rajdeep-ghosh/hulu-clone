import Details from "./Details";
import Thumbnail from "./Thumbnail";

function Main({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => {
        return (
          <div className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Thumbnail backdrop={result.backdrop_path} poster={result.poster_path} />
            <Details result={result} />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
