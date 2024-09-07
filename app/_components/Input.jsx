function Input({ className, placeholder, type }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-3 w-full rounded-md bg-[#faf596] focus:outline-none text-sunriseLight focus:ring-2 focus:ring-offset-2 focus:ring-[#6b4c15] text-sm ${className}`}
    />
  );
}

export default Input;
