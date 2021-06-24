import Image from "next/image";

function Thumbnail({ backdrop, poster }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Image
        layout="responsive"
        src={`${baseURL}${backdrop || poster}` || `${baseURL}${poster}`}
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default Thumbnail;
