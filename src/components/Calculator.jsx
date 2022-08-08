const Wrapper = ({ children }) => {

  return (
    <div className="p-5 space-y-2 bg-gray-300 border border-gray-400 rounded-md drop-shadow-lg">
      {children}
    </div>
  );
}

export default Wrapper;
