const Tooltip = ({ text, topValue }) => {
  return (
    <span
      style={{ top: `-${topValue}px` }}
      className={`invisible block absolute left-0 z-20 w-[300px]  bg-yellow-500 text-white  text-sm py-1 px-2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible`}
    >
      {text}
    </span>
  );
};

export default Tooltip;
