import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CollectionIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  BadgeCheckedIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image src="/hulu-logo.png" width={200} height={100} />
    </div>
  );
}

export default Header;
