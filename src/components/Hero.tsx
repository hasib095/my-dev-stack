import heroImage from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto min-h-[500px] px-4 py-12 flex flex-col items-center gap-10 md:flex-row md:gap-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Build Your Ideal
            <br />
            {/* Gradient Text */}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-gray-600 leading-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            {/* Explore Technologies */}
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
              Explore Technologies
            </button>

            {/* Learn More */}
            <button className="rounded-md border border-gray-300 px-8 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={heroImage}
            alt="Development Stack"
            className="w-full max-w-[330px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
