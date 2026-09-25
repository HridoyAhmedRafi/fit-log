"use client";
import { ExerciesContext } from "@/context/ExerciesContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaRegBookmark } from "react-icons/fa";

const SavedButton = ({ exercise }: { exercise: IExercise }) => {
  const { savedExercies, setSavedExercies } = useContext(ExerciesContext);

  const handleSavedButton = () => {
    if (savedExercies.some((savedItem) => savedItem.id === exercise.id)) {
      toast.error("Already added", {
        position: "top-right",
      });
      return;
    }

    toast.success("Saved for later", {
      position: "top-right",
    });
    setSavedExercies([...savedExercies, exercise]);
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
