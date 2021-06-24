import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <Image src="/tmdb.svg" width={128} height={128} />
      <p className=" mb-2 text-lg font-medium">
        &copy; Rajdeep Ghosh | {" "} 
        <a href="https://github.com/rajdeep-ghosh/" target="_blank">Github | </a>
        <a href="https://linkedin.com/in/rajdeepghosh01/" target="_blank">LinkedIn</a>
      </p>
    </div>
  );
}

export default Footer;
