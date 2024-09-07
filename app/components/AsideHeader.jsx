import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

function AsideHeader({ children }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#1f2937] shadow-md lg:px-[100px] ">
      <div className="flex gap-10 items-center">
        {children}
        <Logo />
      </div>
      <SocialMedia />
    </header>
  );
}

export default AsideHeader;
