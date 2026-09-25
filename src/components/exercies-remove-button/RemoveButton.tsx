"use client";
import { ExerciesContext } from "@/context/ExerciesContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";

const RemoveButton = ({
  plan,
  showMarkAsDone,
}: {
  plan: IExercise;
  showMarkAsDone: boolean;
}) => {
  const { todaysPlan, setTodaysPlan } = useContext(ExerciesContext);
  const { savedExercies, setSavedExercies } = useContext(ExerciesContext);

  const handleRemoveButton = () => {
    if (showMarkAsDone === true) {
      const reaminingTodayExercies = todaysPlan.filter(
        (todaysItem) => todaysItem.id !== plan.id,
      );
      setTodaysPlan(reaminingTodayExercies);
    } else {
      const reaminingSavedExercies = savedExercies.filter(
        (savedItem) => savedItem.id !== plan.id,
      );
      setSavedExercies(reaminingSavedExercies);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleRemoveButton()}
        className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-400  hover:text-red-500"
      >
        ×
      </button>
    </div>
  );
};

export default RemoveButton;
