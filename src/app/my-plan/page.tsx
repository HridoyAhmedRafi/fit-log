const MyPlanPage = () => {
  return (
    <div className="bg-[#0f1115]">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-white text-[30px] font-bold">MY PLAN</h1>
        <p className="text-[#8A92A0] text-[14px] font-semibold">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="tabs tabs-border ">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-white"
            aria-label="Tab 1"
          />

          <div className="tab-content border-base-300 bg-base-100 p-10">
            Today’s Plan
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-white"
            aria-label="Tab 2"
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            Saved
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
