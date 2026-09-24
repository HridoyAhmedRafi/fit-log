"use client";
import { IExercise } from "@/types/exercise.type";
import React, { createContext, ReactNode, useState } from "react";

interface IExerciesContext {
  todaysPlan: IExercise[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savedExercies: IExercise[];
  setSavedExercies: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const ExerciesContext = createContext<IExerciesContext>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedExercies: [],
  setSavedExercies: () => {},
});

const ExerciesProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IExercise[]>([]);
  const [savedExercies, setSavedExercies] = useState<IExercise[]>([]);
  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savedExercies,
    setSavedExercies,
  };
  return (
    <ExerciesContext.Provider value={sharedData}>
      {children}
    </ExerciesContext.Provider>
  );
};

export default ExerciesProvider;
