import Thumbnail from "./Thumbnail";

function Main({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => {
        return (
          <Thumbnail
            backdrop={result.backdrop_path}
            poster={result.poster_path}
          />
        );
      })}
    </div>
  );
}

export default Main;
