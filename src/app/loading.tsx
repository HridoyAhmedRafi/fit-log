const loading = () => {
  return (
    <div className="bg-[#0f1115] container mx-auto px-4 py-5 space-y-8 ">
      <div className=" grid grid-cols-2 items-center gap-3 rounded-2xl border border-[#222630] bg-[#15171D] px-8 py-10">
        <div className="space-y-5">
          <div className="h-4 w-32 rounded bg-[#2A2E38]" />

          <div className="space-y-3">
            <div className="h-12 w-3/4 rounded bg-[#2A2E38]" />
            <div className="h-12 w-2/3 rounded bg-[#2A2E38]" />
          </div>

          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-[#2A2E38]" />
            <div className="h-4 w-2/3 rounded bg-[#2A2E38]" />
            <div className="h-4 w-1/2 rounded bg-[#2A2E38]" />
          </div>

          <div className="h-10 w-40 rounded bg-[#2A2E38]" />
        </div>

        <div className="mx-auto h-64 w-full max-w-md rounded-xl bg-[#2A2E38]" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-[#2D313B] bg-[#15171D]"
          >
            <div className="h-52 bg-[#2A2E38]" />

            <div className="p-6">
              <div className="mb-4 flex gap-2">
                <div className="h-6 w-20 rounded-full bg-[#2A2E38]" />
                <div className="h-6 w-16 rounded-full bg-[#2A2E38]" />
              </div>

              <div className="h-6 w-3/4 rounded bg-[#2A2E38]" />

              <div className="mt-2 h-4 w-1/2 rounded bg-[#2A2E38]" />

              <div className="my-5 border-t border-[#252830]" />

              <div className="flex gap-5">
                <div className="h-4 w-16 rounded bg-[#2A2E38]" />
                <div className="h-4 w-20 rounded bg-[#2A2E38]" />
                <div className="h-4 w-10 rounded bg-[#2A2E38]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
