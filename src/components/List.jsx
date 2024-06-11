const List = ({ children, delaytime }) => {
  return (
    <li
      className="opacity-0 translate-y-[50px] animate-fadeIn max-w-[80ch]"
      style={{ animationDelay: delaytime }}
    >
      {children}
    </li>
  );
};

export default List;
