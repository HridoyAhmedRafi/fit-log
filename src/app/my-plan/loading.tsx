"use client";
const MyPlanLoading = () => {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <div className="container mx-auto px-4 py-10">
        <div className="space-y-3 py-5">
          <div className="h-9 w-40 rounded bg-[#2A2E38]" />

          <div className="h-4 w-96 max-w-full rounded bg-[#2A2E38]" />
        </div>

        <div className="rounded-2xl border border-[#242832] bg-[#15171D]">
          <div className="grid grid-cols-3">
            <div className="border-r border-[#242832] px-6 py-7">
              <div className="h-4 w-20 rounded bg-[#2A2E38]" />
              <div className="mt-2 h-9 w-10 rounded bg-[#2A2E38]" />
            </div>

            <div className="border-r border-[#242832] px-6 py-7">
              <div className="h-4 w-16 rounded bg-[#2A2E38]" />
              <div className="mt-2 h-9 w-10 rounded bg-[#2A2E38]" />
            </div>

            <div className="px-6 py-7">
              <div className="h-4 w-16 rounded bg-[#2A2E38]" />
              <div className="mt-2 h-9 w-14 rounded bg-[#2A2E38]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanLoading;
