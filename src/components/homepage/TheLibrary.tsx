import { IExercise } from "@/types/exercise.type";
import ExerciseCard from "../shared/ExerciseCard";

const getAllExercise = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const TheLibrary = async () => {
  const AllExercise = await getAllExercise();

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-white text-[18px] md:text-[30px] font-bold">
          THE LIBRARY
        </h1>
        <p className="text-[#9CA3AF] text-[11px] md:text-[14px] font-semibold">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div id="library" className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
        {AllExercise.map((exercise: IExercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id}></ExerciseCard>
        ))}
      </div>
    </div>
  );
};

export default TheLibrary;
