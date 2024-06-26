import ProgressBar from "../components/ProgressBar";

const Header = () => {
  return (
    <header className="relative flex items-center justify-start h-24 px-4 flex-shrink-0 bg-white overflow-hidden">
      <div className="container">
        <h1 className="pb-2 text-3xl font-medium">What is Vaping? </h1>
      </div>
      <ProgressBar />
    </header>
  );
};

export default Header;
