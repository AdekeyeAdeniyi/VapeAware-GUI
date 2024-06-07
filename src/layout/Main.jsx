const Main = ({ viewCaption }) => {
  return (
    <main className="relative basis-full px-4">
      {viewCaption && (
        <div className="absolute bg-black text-white bottom-8 left-4 right-4 mx-auto px-2 w-fit">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
          doloremque.
        </div>
      )}
    </main>
  );
};

export default Main;
