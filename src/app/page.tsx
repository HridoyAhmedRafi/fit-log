import Banner from "@/components/homepage/Banner";
import TheLibrary from "@/components/homepage/TheLibrary";

const HomePage = () => {
  return (
    <div className="bg-[#000000] ">
      <div className="container mx-auto px-4 py-10 ">
        <Banner></Banner>
        <TheLibrary></TheLibrary>
      </div>
    </div>
  );
};

export default HomePage;
