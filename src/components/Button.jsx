const Button = ({ Icon, title, iconLocation = "right", ...props }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-[1px] rounded-full bg-indigo-800 opacity-0 blur transition duration-500 group-hover:opacity-100"></div>
      <button
        {...props}
        className={`relative inline-flex justify-center items-center gap-1 px-6 py-2 bg-indigo-800 text-white rounded-full font-semibold ${
          iconLocation == "left" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <span>{title}</span>
        {Icon && <Icon size={24} strokeWidth={3} />}
      </button>
    </div>
  );
};

export default Button;
