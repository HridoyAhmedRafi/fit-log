import Link from "next/link";

import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { LuFlame } from "react-icons/lu";

const ExerciseCard = ({ exercise }: { exercise: IExercise }) => {
  return (
    <Link
      href={`/workouts/${exercise.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#2D313B] bg-[#15171D] transition duration-300 hover:border-[#3A3F4B]"
    >
      <div className="h-52 overflow-hidden">
        <Image
          width={740}
          height={740}
          src={exercise.image}
          alt={exercise.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-[#000000]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold uppercase text-white">
          {exercise.name}
        </h2>

        <p className="mt-1 text-sm text-[#9CA3AF]">{exercise.equipment}</p>
        <div className="my-5 border-t border-[#252830]" />

        <div className="flex items-center gap-5 text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-1.5">
            <FaRegClock className="h-4 w-4" />
            <span>{exercise.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <LuFlame className="h-4 w-4" />

            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaRegStar className="h-4 w-4" />

            <span>{exercise.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
