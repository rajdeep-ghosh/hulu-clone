import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";
import Details from "./Details";

function Main({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => {
        return (
          <div 
            key={result.id}
            className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
          >
            <Thumbnail backdrop={result.backdrop_path} poster={result.poster_path} />
            <Details result={result} />
          </div>
        );
      })}
    </FlipMove>
  );
}

export default Main;
