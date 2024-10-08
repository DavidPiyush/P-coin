import Link from "next/link";
import Image from "next/image";
import { shortenAddress, UseData } from "@/app/_lib/wagmiData";

import { dashboardLink, dashboardLinkBelow } from "@/app/_utlis/routeLink";
import { rightArrow } from "@/app/_utlis/svg";

function Aside({ setIsOpen, onClick }) {
  function handleClose() {
    setIsOpen((isOpen) => !isOpen);
  }

  const { address, chain } = UseData();
  // console.log(chain.iconUrl);

  const ethereumId = shortenAddress(address);
  console.log(ethereumId)
  return (
    <aside
      className={`w-64 h-screen fixed top-0  left-0 z-40  
      transition-transform duration-300 ease-in-out transform `}
    >
      <div className="h-full px-3 py-12 overflow-y-auto bg-[#111827] mt-16 ">
        <ul className="space-y-4 font-medium">
          <li className="flex items-center justify-center ">
            <div className="bg-accent-500 rounded-full w-24 h-24 relative ">
              <Image
                src={chain.iconUrl.src}
                alt="user logo"
                
                quality={100}
                fill
                // className="w-12 rounded-full bg-white"
              />
            </div>
          </li>
          <li className="flex items-center justify-center flex-1 ms-3 whitespace-nowrap py-2">
            <span className="text-white font-bold text-xl ">{ethereumId}</span>
          </li>
          <li className="w-full border-gray-700" onClick={onClick}>
            <button className="sidebar-btn justify-center fill-white w-full  border-[1px] rounded-lg">
              {rightArrow}
              <span className="ms-3">Disconnect</span>
            </button>
          </li>
          <li className=" w-full flex justify-around py-2  ">
            {dashboardLink.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={handleClose}
                className="rounded-full p-2 hover:bg-gray-100  dark:hover:bg-gray-700"
              >
                {link.svg}
              </Link>
            ))}
          </li>
        </ul>
        <hr className="my-4" />
        <ul className="space-y-2 font-medium">
          {dashboardLinkBelow.map((link) => (
            <li
              key={link.title}
              className={` ${link.className}`}
              onClick={handleClose}
            >
              <Link
                href={link.path}
                className={`sidebar-btn  ${link.linkClass}`}
              >
                {link.svg}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
