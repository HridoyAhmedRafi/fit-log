import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#15171D] border border-[#222630] rounded-2xl px-8 py-10 grid grid-cols-2 items-center justify-between gap-3">
      <div className="space-y-5">
        <p className="text-[#C2F800] font-bold text-[13px]">WORKOUT LIBRARY</p>
        <h1 className="text-white text-[50px] font-bold max-w-[620px]">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-[#9CA3AF] text-[16px] max-w-[450px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          todays plan, and watch the weeks work add up.
        </p>
        <button className="text-[#000000] bg-[#C2F800] text-[12px] px-5 p-3 rounded font-bold cursor-pointer">
          BROWSE WORKOUTS
        </button>
      </div>

      <div className="mx-auto">
        <Image src={banner} alt="banner image"></Image>
      </div>
    </div>
  );
};

export default Banner;
