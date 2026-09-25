"use client";
import { ExerciesContext } from "@/context/ExerciesContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";
import toast from "react-hot-toast";
import { MdOutlineCalendarToday } from "react-icons/md";

const TodaysPlanButton = ({ exercise }: { exercise: IExercise }) => {
  const { todaysPlan, setTodaysPlan } = useContext(ExerciesContext);

  const handleTodaysPlan = () => {
    if (todaysPlan.some((todaysItem) => todaysItem.id === exercise.id)) {
      toast.error("Already added", {
        position: "top-right",
      });
      return;
    }
    setTodaysPlan([...todaysPlan, exercise]);
    toast.success("Added to today's plan", {
      position: "top-right",
    });
  };

  return (
    <div >
      <button
        onClick={() => handleTodaysPlan()}
        className="btn rounded-2xl  shadow-none border-0 bg-[#C2F800] text-black hover:bg-[#C2F800]"
      >
        <MdOutlineCalendarToday className="h-4 w-4" />
        Add to todays plan
      </button>
    </div>
  );
};

export default TodaysPlanButton;
