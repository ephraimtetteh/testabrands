import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      () => setIsScrolled(true);
      return;
    } else {
      () => setIsScrolled(false);
    }
    () => setIsScrolled((prev) => (location.pathname !== "/" ? true : prev));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full flex text-[#1A1A1A] font-normal bg-white  backdrop-blur-lg items-center justify-between px-3 md:px-6 lg:px-12 xl:px-12 transition-all duration-500 z-50 ${
          isScrolled
            ? " backdrop-blur-2xl py-3 md:py-4 text-slate-700"
            : "py-2 md:py-3"
        } `}
      >
        <a href="/">
          <img src={assets.logo} alt="" className="" width={75} />
        </a>
        <div
          id="menu"
          class="max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:w-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium"
        >
          <a href="/" class="hover:text-gray-500">
            Home
          </a>
          <div class="relative group flex items-center justify-center gap-1 cursor-pointer">
            <span>Why Us</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#F8F8F8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="absolute bg-gray-100 font-normal flex flex-col gap-2 w-max rounded p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-30 group-hover:opacity-100 transition-all duration-300">
              <a
                href="/about-company"
                class="hover:translate-x-1 hover:text-slate-500 transition-all text-[#1A1A1A]"
              >
                Our creative talent
              </a>
              <a
                href="/about"
                class="hover:translate-x-1 hover:text-slate-500 transition-all text-[#1A1A1A]"
              >
                Our technology
              </a>
            </div>
          </div>
          <a href="/our-works" class="hover:text-gray-500">
            Portfolio
          </a>
          <div class="relative group flex items-center justify-center gap-1 cursor-pointer">
            <span>Services</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#F8F8F8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="absolute bg-gray-100 font-normal flex flex-col gap-2 w-max rounded p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-30 group-hover:opacity-100 transition-all duration-300">
              <a
                href="/about-company"
                class="hover:translate-x-1 hover:text-slate-500 transition-all text-[#1A1A1A]"
              >
                Ad Creative
              </a>
              <a
                href="/about"
                class="hover:translate-x-1 hover:text-slate-500 transition-all text-[#1A1A1A]"
              >
                Presentation design
              </a>
            </div>
          </div>

          <a href="/contact-us" class="hover:text-gray-500">
            Contact
          </a>
          <a
            href="/book-us"
            class="md:hidden bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium transition"
          >
            Book a demo
          </a>
        </div>
        <Link
          href="/book-us"
          class="hidden md:block bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium transition"
        >
          Sign in
        </Link>

        {/* ===================== mobile menu ===================== */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            id="open-menu"
            class="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            id="close-menu"
            class="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center">
            <a href="/" class="hover:text-gray-500">
              Home
            </a>
            <div class="relative group flex items-center gap-1 cursor-pointer">
              <span>Why us</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="absolute bg-gray-100 font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-44 group-hover:opacity-100 transition-all duration-300">
                <a
                  href="/about"
                  class="hover:translate-x-1 hover:text-slate-500 transition-all"
                >
                  Our creative talent
                </a>
                <a
                  href="about-company"
                  class="hover:translate-x-1 hover:text-slate-500 transition-all"
                >
                  Our technology
                </a>
              </div>
            </div>
            <a href="/our-works" class="hover:text-gray-500">
              Our Work
            </a>
            <div class="relative group flex items-center justify-center gap-1 cursor-pointer">
              <span>Services</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#F8F8F8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="absolute bg-gray-100 font-normal flex flex-col gap-2 w-max rounded p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-30 group-hover:opacity-100 transition-all duration-300">
                <a
                  href="/about-company"
                  class="hover:translate-x-1 hover:text-slate-500 transition-all text-[#1A1A1A]"
                >
                  Ad Creative
                </a>
                <a
                  href="/about"
                  class="hover:translate-x-1 hover:text-slate-500 transition-all text-[#1A1A1A]"
                >
                  Presentation design
                </a>
              </div>
            </div>

            <a href="/contact-us" class="hover:text-gray-500">
              Contact
            </a>
            <a
              href="/book-us"
              class="md:hidden bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium transition"
            >
              Book a demo
            </a>
          </div>
          <Link
            href="/book-us"
            class="hidden md:block bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium transition"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
