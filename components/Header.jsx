import Image from "next/image";

function Header() {
  return (
    <div>
      <h1>This is the Header</h1>
      <Image src="/hulu-logo.png" width={200} height={100} />
    </div>
  );
}

export default Header;
