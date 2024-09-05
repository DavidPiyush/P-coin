function Button({ children, className }) {
  return (
    <button
      className={`text-white bg-[#5b4406]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10  py-2.5 hover:bg-[#9e894e] ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
