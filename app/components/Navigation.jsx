"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "./Button";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle(e) {
    console.log("open window");
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <nav className="text-xl  ">
      <ul
        className={`lg:gap-16 md:gap-10  text-[#5b4406]   active-nav-menu md:relative md:flex md:visible  md:translate-x-0 md:opacity-100 md:flex-row md:items-center md:h-0 md:top-0 md:pointer-events-auto ${
          isOpen ? " active-el " : ""
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>{" "}
        <li>
          <Link href="/about">About</Link>
        </li>{" "}
        <li>
          <Link href="/refer">Refer</Link>
        </li>{" "}
        <li>
          <Link href="/buy">
            <Button>Buy Now</Button>
          </Link>
        </li>
      </ul>

      {isOpen ? (
        <span
          onClick={(e) => handleToggle(e)}
          className="cursor-pointer block md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-x bar"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </span>
      ) : (
        <span onClick={handleToggle} className="cursor-pointer block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list bar"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </span>
      )}
    </nav>
  );
}

export default Navigation;
