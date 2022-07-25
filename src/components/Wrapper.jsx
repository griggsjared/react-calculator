const Wrapper = ({ children }) => {

  return (
    <div className="bg-gray-300 border border-gray-400 p-5 space-y-2 rounded-md drop-shadow-lg w-full max-w-[25rem] sm:w-[25rem] ">
      {children}
    </div>
  );
}

export default Wrapper;
