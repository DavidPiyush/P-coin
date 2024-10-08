"use client";

import { useEffect, useState } from "react";
import SideBarBtn from "./SideBarBtn";
import Aside from "./Aside";
import { close, menu } from "@/app/_utlis/svg";
import AsideHeader from "./AsideHeader";
import Logout from "./Logout";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);

  // Initialize to 0 to avoid server-side issues

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

  function handleCloseModal() {
    setIsLogout((isLogout) => !isLogout);
    setOpenModal(false);
  }

  return (
    <section
      className={`mt-[74px] ${isLogout ? "flex justify-center" : ""}`}
      id="sidebar"
    >
      {isLogout || openModal ? (
        <Logout
          setOpenModal={setOpenModal}
          onCloseModal={handleCloseModal}

          // Pass handleCloseModal as a prop
        />
      ) : (
        <div className="relative  bg-red-950 ">
          {innerWidth < 1024 && (
            <>
              <MobileScreen isOpen={isOpen} setIsOpen={setIsOpen} />
              {isOpen && (
                <div
                  onClick={handleClose}
                  className={`fixed inset-0 z-40 transition-all duration-300 backdrop-blur-sm bg-black bg-opacity-30`}
                ></div>
              )}
              {isOpen && (
                <Aside
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  onClick={handleCloseModal}
                />
              )}
            </>
          )}

          {innerWidth >= 1024 && (
            <>
              <AsideHeader></AsideHeader>
              <Aside
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClick={handleCloseModal}
              />
            </>
          )}
        </div>
      )}
    </section>
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
