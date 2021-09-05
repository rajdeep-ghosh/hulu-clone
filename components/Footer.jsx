import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-2">
      <Image src="/tmdb.svg" width={128} height={128} />
      <p className=" mb-2 text-lg font-medium">
        &copy; Rajdeep Ghosh | {" "} 
        <a href="https://github.com/rajdeep-ghosh/hulu-clone/" target="_blank">Github | </a>
        <a href="https://linkedin.com/in/rajdeepghosh01/" target="_blank">LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
