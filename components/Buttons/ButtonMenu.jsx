"use client";

import { useState } from "react";

export default function ButtonMenu({ setClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setClick();
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center px-3 lg:hidden"
    >
      <span
        className={`bg-black block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
