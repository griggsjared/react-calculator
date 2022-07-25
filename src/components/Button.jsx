const Button = ({ onClick, className, label }) => {
  return (
    <button className={`text-center w-full bg-gray-600 text-white py-4 rounded-lg text-2xl leading-none ${className ?? ''}`} onClick={onClick}>{label}</button>
  )
}

export default Button;
