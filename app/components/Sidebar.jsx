"use client";

import { useEffect, useState } from "react";
import SideBarBtn from "../components/SideBarBtn";
import Aside from "./Aside";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(innerWidth);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="bg-red-300">
      {innerWidth < 1024 ? (
        <MobileScreen isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Aside />
      )}
      <div
        onClick={handleClose}
        className="bg-red-950 h-[100px] p-4 sm:ml-64"
      ></div>
    </div>
  );
}

function MobileScreen({ isOpen, setIsOpen }) {
  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div>
      <SideBarBtn onClick={handleClick} />
      {isOpen ? <Aside /> : ""}
    </div>
  );
}

export default Sidebar;
