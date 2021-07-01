import { forwardRef } from "react";
import Image from "next/image";

const Thumbnail = forwardRef(({ backdrop, poster }, ref) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref}>
      <Image
        layout="responsive"
        src={`${baseURL}${backdrop || poster}` || `${baseURL}${poster}`}
        width={1920}
        height={1080}
      />
    </div>
  );
})

export default Thumbnail;
