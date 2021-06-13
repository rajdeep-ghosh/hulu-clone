function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center group w-12 sm:w-20 hover:text-white cursor-pointer">
      <Icon className=" h-7 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest uppercase opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
