"use client";

import { useEffect, useState } from "react";
import SideBarBtn from "../components/SideBarBtn";
import Aside from "./Aside";
import { close, menu } from "@/utlis/svg";
import AsideHeader from "./AsideHeader";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0); // Initialize to 0 to avoid server-side issues

  useEffect(() => {
    // Set the initial width
    setInnerWidth(window.innerWidth);

    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="relative h-screen bg-red-950">
      {innerWidth < 1024 && (
        <>
          <MobileScreen isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && (
            <div
              onClick={handleClose}
              className={`fixed inset-0 z-40 transition-all duration-300 backdrop-blur-sm bg-black bg-opacity-30`}
            ></div>
          )}
          {isOpen && <Aside isOpen={isOpen} />}
        </>
      )}

      {innerWidth >= 1024 && (
        <><AsideHeader>
        </AsideHeader><Aside isOpen={isOpen} /></>
      )}
    </div>
  );
}

function MobileScreen({ isOpen, setIsOpen }) {
  return (
    <AsideHeader>
      <SideBarBtn onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? close : menu}
      </SideBarBtn>
    </AsideHeader>
  );
}

export default Sidebar;
