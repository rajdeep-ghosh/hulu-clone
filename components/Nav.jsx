import { useRouter } from "next/router";
import styles from "./styles/Nav.module.css";
import requests from "../utils/requests";

function Nav() {
  const Router = useRouter();

  return (
    <nav className="relative">
      <div 
        className={`flex whitespace-nowrap text-lg sm:text-2xl px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-auto ${styles.hide__scrollbar}`}
      >
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2 
              key={key}
              onClick={() => {Router.push(`/?genre=${key}`)}} 
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-8 sm:last:pr-20"
            >
              {title}
            </h2>
          );
        })}  
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/6 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
}

export default Nav;
