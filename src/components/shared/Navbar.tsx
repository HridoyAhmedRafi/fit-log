"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          className={`${usePathname() === "/" ? "bg-[#1A2312] text-[#C2F800] rounded-full" : "text-[#9CA3AF]"}`}
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={`${usePathname() === "/my-plan" ? "bg-[#1A2312] text-[#C2F800] rounded-full" : "text-[#9CA3AF]"}`}
          href="/my-plan"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-[#0C0D10] border-b border-b-[#1C1F26]">
      <div className="container mx-auto ">
        <div className="navbar">
          <div className="navbar-start  ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="btn btn-ghost text-xl hover:bg-transparent ">
              <Image src={logo} alt="logo"></Image>
              <span className="text-white ">FITLOG</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-4">
            <Link
              href={"/my-plan"}
              className="text-[#D1D5DB] flex items-center justify-between gap-2"
            >
              Plan{" "}
              <span className=" bg-[#C2F800] text-[#000000] font-semibold px-2 rounded-full">
                {0}
              </span>
            </Link>
            <Link
              href={"/my-plan"}
              className="text-[#D1D5DB] flex items-center justify-between gap-2"
            >
              Saved{" "}
              <span className=" border border-[#2D313B] text-[#D1D5DB] font-semibold px-2 rounded-full">
                {0}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
