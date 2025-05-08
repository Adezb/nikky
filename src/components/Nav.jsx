import { closeicon, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

import { useState, useEffect } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      //disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      //enable body scroll
      document.body.style.overflow = "auto";
    }
    //Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="padding-x py-8 z-50 w-full sticky top-0 shadow-lg bg-white-400 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-grayish-blue"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="hidden max-lg:block cursor-pointer z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <img src={closeicon} alt="close" width={25} height={25} />
          ) : (
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md lg:hidden py-5">
          <ul className="flex flex-col items-center gap-y-5">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-grayish-blue"
                  onClick={() => setIsMobileMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col items-center gap-y-4">
            <a
              href="/"
              className="font-montserrat text-lg text-grayish-blue font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </a>
            <span>/</span>
            <a
              href="/"
              className="font-montserrat text-lg text-grayish-blue font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
