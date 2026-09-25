import banner from "@/assets/banner.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#15171D] border border-[#222630] rounded-2xl px-8 py-10 grid grid-cols-1 md:grid-cols-2  items-center justify-between gap-3">
      <div className="space-y-5">
        <p className="text-[#C2F800] font-bold text-[13px]">WORKOUT LIBRARY</p>
        <h1 className="text-white text-[30px] md:text-[46px] lg:text-[56px] font-bold max-w-130 md:max-w-300 lg:max-w-400 leading-none">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-[#9CA3AF] text-[10px] md:text-[16px] max-w-80 md:max-w-112.5">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          todays plan, and watch the weeks work add up.
        </p>
        <a
          href="#library"
          className="text-[#000000] bg-[#C2F800] text-[10px] md:text-[12px] px-4 md:px-5 p-2 md:p-3 rounded font-bold cursor-pointer flex items-center gap-2 w-fit"
        >
          BROWSE WORKOUTS
          <FaArrowDown className="text-[10px]" />
        </a>
      </div>

      <div className="mx-auto mt-4 md:mt-0">
        <Image src={banner} alt="banner image"></Image>
      </div>
    </div>
  );
};

export default Banner;
