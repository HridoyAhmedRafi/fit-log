"use client";

import ActiveTabCard from "@/components/my-plan-tab/ActiveTabCard";
import { ExerciesContext } from "@/context/ExerciesContext";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const { todaysPlan, savedExercies } = useContext(ExerciesContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const activeExercises = activeTab === "today" ? todaysPlan : savedExercies;
  const totalExercises = activeExercises.length;
  const totalMinutes = activeExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = activeExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <div className="container mx-auto px-4 py-10">
        <div className="py-5">
          <h1 className="font-bold text-white text-[30px]">MY PLAN</h1>
          <p className="text-[#8A92A0] text-[14px] font-semibold">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="rounded-2xl border border-[#242832] bg-[#15171D]">
          <div className="grid grid-cols-3">
            <div className="border-r border-[#242832] px-6 py-7">
              <p className="text-sm text-[#9CA3AF]">Exercises</p>

              <p className="mt-1 text-3xl font-bold text-[#C2F800]">
                {totalExercises}
              </p>
            </div>

            <div className="border-r border-[#242832] px-6 py-7">
              <p className="text-sm text-[#9CA3AF]">Minutes</p>

              <p className="mt-1 text-3xl font-bold text-white">
                {totalMinutes}
              </p>
            </div>

            <div className="px-6 py-7">
              <p className="text-sm text-[#9CA3AF]">Calories</p>

              <p className="mt-1 text-3xl font-bold text-white">
                {totalCalories}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between ">
          <div className=" flex rounded-xl border border-[#242832] bg-[#15171D] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`cursor-pointer rounded-lg px-5 py-2 text-sm transition ${
                activeTab === "today"
                  ? "bg-[#242832] font-semibold text-white"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              Todays Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`cursor-pointer rounded-lg px-5 py-2 text-sm transition ${
                activeTab === "saved"
                  ? "bg-[#242832] font-semibold text-white"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <select className="select select-sm border-[#242832] bg-[#15171D] text-[#D1D5DB]">
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>

        <div className="mt-5">
          {activeExercises.length > 0 ? (
            activeExercises.map((plan) => (
              <ActiveTabCard
                plan={plan}
                key={plan.id}
                showMarkAsDone={activeTab === "today"}
              />
            ))
          ) : (
            <div className="py-20 border border-[#232732] flex items-center justify-center ">
              <div className="space-y-3">
                <h1 className="text-[20px] font-bold text-white text-center">
                  NOTHING HERE YET
                </h1>

                <p className="text-[#A1A1AA] text-center">
                  Browse the library and add a lift to get today moving.
                </p>

                <div className="flex justify-center">
                  <Link href={"/"}>
                    <button className="bg-[#C2F10D] text-[#000000] px-5 py-2 rounded-full font-semibold cursor-pointer">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
