"use client";
import { ExerciesContext } from "@/context/ExerciesContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SavedButton = ({ exercise }: { exercise: IExercise }) => {
  const { savedExercies, setSavedExercies } = useContext(ExerciesContext);

  const handleSavedButton = () => {
    if (savedExercies.some((savedItem) => savedItem.id === exercise.id)) {
      toast.info(`Already added`, {
        position: "bottom-right",
      });
      return;
    }

    setSavedExercies([...savedExercies, exercise]);
    toast.success(`Saved for later`, {
      position: "bottom-right",
    });
  };

  return (
    <div>
      <button
        onClick={() => handleSavedButton()}
        className="btn border rounded-2xl shadow-none border-[#2D313B] bg-transparent text-[#D1D5DB] hover:border-[#3A3F4B] hover:bg-transparent"
      >
        <FaRegBookmark className="h-4 w-4" />
        Save for later
      </button>
    </div>
  );
};

export default SavedButton;
