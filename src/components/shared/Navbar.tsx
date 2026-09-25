"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ExerciesContext } from "@/context/ExerciesContext";

const Navbar = () => {
  const { todaysPlan } = useContext(ExerciesContext);
  const { savedExercies } = useContext(ExerciesContext);

  const links = (
    <>
      <li>
        <Link
          className={`${usePathname() === "/" ? "bg-[#1A2312] text-[#C2F800] rounded-full font-semibold" : "text-[#9CA3AF] font-semibold"}`}
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={`${usePathname() === "/my-plan" ? "bg-[#1A2312] text-[#C2F800] rounded-full font-semibold" : "text-[#9CA3AF] font-semibold"}`}
          href="/my-plan"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-[#0C0D10]  border-b border-b-[#1C1F26]">
      <div className="container mx-auto px-4 ">
        <div className="w-full">
          <div className=" border-b border-b-[#1C1F26] flex items-center justify-between min-h-16 ">
            <div className=" flex items-center gap-2 ">
              <Image src={logo} alt="logo"></Image>
              <span className="text-white ">FITLOG</span>
            </div>

            <div className="hidden md:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={"/my-plan"}
                className="text-[#D1D5DB] flex items-center justify-between gap-2"
              >
                Plan{" "}
                <span className=" bg-[#C2F800] text-[#000000] font-semibold px-2 rounded-full">
                  {todaysPlan.length}
                </span>
              </Link>
              <Link
                href={"/my-plan"}
                className="text-[#D1D5DB] flex items-center justify-between gap-2"
              >
                Saved{" "}
                <span className=" border border-[#2D313B] text-[#D1D5DB] font-semibold px-2 rounded-full">
                  {savedExercies.length}
                </span>
              </Link>
            </div>
          </div>

          <div className=" md:hidden flex justify-center pb-3">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
