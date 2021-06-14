import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div 
        className="flex whitespace-nowrap text-lg sm:text-2xl px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-auto"
      >
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2 
              key={key} 
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-6"
            >
              {title}
            </h2>
          );
        })}  
      </div>
    </nav>
  );
}

export default Nav;
