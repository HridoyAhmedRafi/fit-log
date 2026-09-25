import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import RemoveButton from "../exercies-remove-button/RemoveButton";
import MarkAsDoneButton from "../exercies-remove-button/MarkAsDoneButton";

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
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src={plan.image}
          alt={plan.name}
          width={740}
          height={740}
          className="h-24 w-24 shrink-0 rounded-xl object-cover"
        />

        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-white">
            {plan.name}
          </h2>

          <p className="mt-1 text-sm text-[#8A92A0]">{plan.equipment}</p>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full  py-1 text-[#D1D5DB]">
              {plan.duration} min
            </span>

            <span className="rounded-full  py-1 text-[#D1D5DB]">
              {plan.caloriesBurned} cal
            </span>

            <span className="font-medium text-[#D1D5DB]">⭐ {plan.rating}</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-2">
        <Link href={`/workouts/${plan.id}`}>
          <button className="cursor-pointer rounded-full border border-[#374151] px-4 py-2 text-[12px] font-medium text-white ">
            View Details
          </button>
        </Link>

        <MarkAsDoneButton
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
