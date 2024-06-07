import { ProgressProvider } from "./hooks/useContent";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => {
  return (
    <ProgressProvider>
      <div className="flex flex-col w-full h-screen bg-gray-300">
        <Header />
        <Main />
        <Footer />
      </div>
    </ProgressProvider>
  );
};

export default App;
