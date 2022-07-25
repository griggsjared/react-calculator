const ButtonsGrid = ({children}) => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {children}
    </div>
  );
}

export default ButtonsGrid;
