import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import Link from "next/link";
import RemoveButton from "../exercies-remove-button/RemoveButton";
import MarkAsDoneButton from "../exercies-remove-button/MarkAsDoneButton";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

const ActiveTabCard = ({
  plan,
  showMarkAsDone = false,
}: {
  plan: IExercise;
  showMarkAsDone?: boolean;
}) => {
  return (
    <div className="mb-3 flex flex-col gap-5 rounded-2xl border border-[#232732] bg-[#14171E] p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      {/* Left Side */}
      <div className="flex flex-col sm:flex-row min-w-0 items-center gap-4">
        <Image
          src={plan.image}
          alt={plan.name}
          width={740}
          height={740}
          className=" h-40 w-80 sm:h-24 sm:w-24 shrink-0 rounded-xl object-cover"
        />

        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-white">
            {plan.name}
          </h2>

          <p className="sm:mt-1 text-sm text-[#8A92A0]">{plan.equipment}</p>

          <div className="m-1 sm:mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full  py-1 text-[#D1D5DB] flex items-center gap-1">
              <FaRegClock className="text-[#CCFF00]" />
              {plan.duration} min
            </span>

            <span className="rounded-full  py-1 text-[#D1D5DB] flex items-center gap-1">
              <FaFireFlameCurved className="text-[#CCFF00]" />
              {plan.caloriesBurned} kcal
            </span>

            <span className=" text-[#D1D5DB] flex items-center gap-1">
              <FaRegStar className="text-[#CCFF00]" />
              {plan.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center  shrink-0 items-center gap-2">
        <Link href={`/workouts/${plan.id}`}>
          <button className="cursor-pointer rounded-full border border-[#374151] px-4 py-2 whitespace-nowrap text-[10px] sm:text-[12px] font-medium text-white ">
            View Details
          </button>
        </Link>

        <MarkAsDoneButton
          plan={plan}
          showMarkAsDone={showMarkAsDone}
        ></MarkAsDoneButton>

        <RemoveButton
          plan={plan}
          showMarkAsDone={showMarkAsDone}
        ></RemoveButton>
      </div>
    </div>
  );
};

export default ActiveTabCard;
