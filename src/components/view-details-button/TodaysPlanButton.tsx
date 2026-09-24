"use client";
import { ExerciesContext } from "@/context/ExerciesContext";
import { IExercise } from "@/types/exercise.type";
import { Plus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const TodaysPlanButton = ({ exercise }: { exercise: IExercise }) => {
  const { todaysPlan, setTodaysPlan } = useContext(ExerciesContext);

  const handleTodaysPlan = () => {
    toast.success(`Added to today's plan`, {
      position: "bottom-right",
    });
    setTodaysPlan([...todaysPlan, exercise]);
  };

  return (
    <div>
      <button
        onClick={() => handleTodaysPlan()}
        className="btn rounded-2xl shadow-none border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]"
      >
        <Plus className="h-4 w-4" />
        Add to todays plan
      </button>
    </div>
  );
};

export default TodaysPlanButton;
