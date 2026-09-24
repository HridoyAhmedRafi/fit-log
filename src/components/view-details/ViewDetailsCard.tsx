import { IExercise } from "@/types/exercise.type";
import { Bookmark, Plus } from "lucide-react";
import Image from "next/image";

const ViewDetailsCard = ({ exercise }: { exercise: IExercise }) => {
  return (
    <div className=" card overflow-hidden ">
      <div className="grid gap-8 p-4 md:grid-cols-2 md:p-6">
        <div className="h-full min-h-80 overflow-hidden rounded-xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={740}
            height={740}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold uppercase text-white md:text-4xl">
            {exercise.name}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
            {exercise.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge rounded-full border-0 bg-[#C2F800] px-3 py-3 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#20232B] bg-[#15171D]">
            <div className="divide-y divide-[#252830]">
              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">
                  Equipment
                </span>
                <span className="text-[#D1D5DB]">{exercise.equipment}</span>
              </div>

              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">
                  Difficulty
                </span>
                <span className="text-[#D1D5DB]">{exercise.difficulty}</span>
              </div>

              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">Sets</span>
                <span className="text-[#D1D5DB]">{exercise.sets}</span>
              </div>

              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">Reps</span>
                <span className="text-[#D1D5DB]">{exercise.reps}</span>
              </div>

              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">
                  Duration
                </span>
                <span className="text-[#D1D5DB]">{exercise.duration} min</span>
              </div>

              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">
                  Calories
                </span>
                <span className="text-[#D1D5DB]">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 text-sm">
                <span className="text-xs uppercase text-[#9CA3AF]">Rating</span>
                <span className="text-[#D1D5DB]">{exercise.rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-2 space-y-2">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-xs leading-relaxed text-[#9CA3AF]"
                >
                  <span className="text-[#9CA3AF]">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn rounded-2xl shadow-none border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]">
              <Plus className="h-4 w-4" />
              Add to todays plan
            </button>

            <button className="btn border rounded-2xl shadow-none border-[#2D313B] bg-transparent text-[#D1D5DB] hover:border-[#3A3F4B] hover:bg-transparent">
              <Bookmark className="h-4 w-4" />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
