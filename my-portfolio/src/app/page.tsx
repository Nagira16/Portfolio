import SlideImages from "@/components/partials/SlideImages";

const Home = () => {
  return (
    <div className="text-center w-full h-full">
      <div className=" grid place-content-center min-h-screen">
        <h1 className="text-9xl bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent">
          Code is Art
        </h1>
        <p className="text-2xl mt-5">
          I'm a Full-Stack Developer Creating Innovative Solutions.
        </p>
      </div>
      <div className="mt-10">
        <SlideImages />
      </div>
    </div>
  );
};

export default Home;
