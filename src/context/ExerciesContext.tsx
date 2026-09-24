"use client";
import { IExercise } from "@/types/exercise.type";
import React, { createContext, ReactNode, useState } from "react";

interface IExerciesContext {
  todaysExercies: IExercise[];
  setTodaysExercies: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savedExercies: IExercise[];
  setSavedExercies: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

const ExerciesContext = createContext<IExerciesContext>({
  todaysExercies: [],
  setTodaysExercies: () => {},
  savedExercies: [],
  setSavedExercies: () => {},
});

const ExerciesProvider = ({ children }: { children: ReactNode }) => {
  const [todaysExercies, setTodaysExercies] = useState<IExercise[]>([]);
  const [savedExercies, setSavedExercies] = useState<IExercise[]>([]);
  const sharedData = {
    todaysExercies,
    setTodaysExercies,
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
