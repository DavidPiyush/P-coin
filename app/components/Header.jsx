import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className=" px-8 py-5 bg-[#fce9ba] shadow-2xl">
      <div className="flex justify-between items-center lg:max-w-7xl mx-auto md:max-w-2xl max-w-md" >
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
