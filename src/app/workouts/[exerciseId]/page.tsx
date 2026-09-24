import ViewDetailsCard from "@/components/view-details/ViewDetailsCard";

interface ExerciseDetailsPageProps {
  params: Promise<{ exerciseId: string }>;
}

const ExerciseDetailsPage = async ({ params }: ExerciseDetailsPageProps) => {
  const { exerciseId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${exerciseId}`,
  );
  const exercise = await res.json();

  return (
    <div className="bg-[#0f1115] ">
      <div className="container mx-auto px-4 py-10">
        <ViewDetailsCard exercise={exercise}></ViewDetailsCard>
      </div>
    </div>
  );
};

export default ExerciseDetailsPage;
