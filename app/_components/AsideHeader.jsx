import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

function AsideHeader({ children }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#1f2937] shadow-md lg:px-[100px]  ">
      <div className="flex w-full  items-center justify-between md:gap-10 md:justify-start">
        {children}

        <Logo textColor="text-white" />
      </div>
      <SocialMedia className="hidden md:flex" />
    </header>
  );
}

export default AsideHeader;
