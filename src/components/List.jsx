const List = ({ children, delaytime }) => {
  return (
    <li
      className="opacity-0 -translate-y-[50px] animate-fadeIn"
      style={{ animationDelay: delaytime }}
    >
      {children}
    </li>
  );
};

export default List;
