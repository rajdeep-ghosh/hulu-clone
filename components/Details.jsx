import { ThumbUpIcon } from "@heroicons/react/outline";

function Details({ result }) {
  return (
    <div className="p-2">
      <p className="truncate">{result.overview}</p>
      <h2 className="mt-1 text-2xl text-white transition-all ease-in-out duration-100 group-hover:font-bold">
        {result.title || result.original_title || result.name || result.original_name}
      </h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100 capitalize">
        {result.media_type && `${result.media_type} · `}{" "}
        {result.release_date || result.first_air_date} ·
        <ThumbUpIcon className="h-5 mx-1" /> {" "}
        {result.vote_count}
      </p>
    </div>
  );
}

export default Details;