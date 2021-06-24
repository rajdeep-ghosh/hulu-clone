import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CollectionIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="m-5 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <a href="/">
          <HeaderItem title="home" Icon={HomeIcon} />
        </a>
        <a href="/?genre=fetchTrending">
          <HeaderItem title="trending" Icon={LightningBoltIcon} />
        </a>
        <HeaderItem title="verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="collections" Icon={CollectionIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <Image 
        className="order-first sm:order-none" 
        src="/hulu-logo.png" 
        width={200} 
        height={100}        
      />
    </header>
  );
}

export default Header;
