const Button = ({ Icon, title, iconLocation = "right", isFixed, ...props }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-[1px] rounded-full bg-indigo-800 opacity-0 blur transition duration-500 group-hover:opacity-100"></div>
      <button
        {...props}
        className={`relative inline-flex justify-center items-center gap-1 p-2 sm:px-6 sm:py-2 bg-indigo-800 text-white rounded-full font-semibold transition-all ${
          iconLocation == "left" ? "flex-row-reverse" : "flex-row"
        } ${isFixed && "md:w-[160px]"}`}
      >
        <span className="hidden md:inline-block">{title}</span>
        {Icon && <Icon size={24} strokeWidth={3} />}
      </button>
    </div>
  );
};

export default Button;
