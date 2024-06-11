const Tooltip = ({ text }) => {
  return (
    <span className="invisible block absolute -top-8 left-0  bg-[#555] text-white text-center text-sm py-1 px-2 rounded-md opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible">
      {text}
    </span>
  );
};

export default Tooltip;
