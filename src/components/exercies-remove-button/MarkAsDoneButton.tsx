"use client";

import { ExerciesContext } from "@/context/ExerciesContext";
import { IExercise } from "@/types/exercise.type";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { FaCheck } from "react-icons/fa";

const MarkAsDoneButton = ({
  showMarkAsDone,
  plan,
}: {
  showMarkAsDone: boolean;
  plan: IExercise;
}) => {
  const [markAsDone, setMarkAsDone] = useState(false);
  const { todaysPlan, setTodaysPlan } = useContext(ExerciesContext);

  const handleMarkAsDoneButton = (action: true | false) => {
    const reaminingTodayExercies = todaysPlan.filter(
      (todaysItem) => todaysItem.id !== plan.id,
    );
    toast.success("Workout done", {
      position: "top-right",
    });
    setMarkAsDone(action);
    setTodaysPlan(reaminingTodayExercies);
  };
  return (
    <div>
      {showMarkAsDone && (
        <button
          disabled={markAsDone}
          onClick={() => handleMarkAsDoneButton(true)}
          className="flex cursor-pointer items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-medium text-[#000000] disabled:cursor-not-allowed disabled:bg-[#4B5563] disabled:text-[#9CA3AF] disabled:opacity-60"
        >
          <FaCheck />
          Mark as Done
        </button>
      )}
    </div>
  );
};

export default MarkAsDoneButton;
