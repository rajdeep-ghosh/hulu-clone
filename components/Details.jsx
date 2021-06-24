import { ThumbUpIcon } from "@heroicons/react/outline";

function Details({ result }) {
  return (
    <div>
      <p>{result.overview}</p>
      <h2>{result.title || result.original_title || result.name || result.original_name}</h2>
      <p>
        {result.media_type && `${result.media_type} · `}{" "}
        {result.release_date || result.first_air_date} ·{" "}
        <ThumbUpIcon className="h-5 inline" /> {" "}
        {result.vote_count}
      </p>
    </div>
  );
}

export default Details;
