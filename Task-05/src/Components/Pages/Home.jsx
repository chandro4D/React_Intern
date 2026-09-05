const Home = () => {
  return (
    <div className="bg-gray-100 px-16 py-20">
      <div className="flex items-center justify-between max-w-6xl mx-auto gap-16">
        {/* Left: Text content */}
        <div className="max-w-xl">
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            LEARN . PRACTICE . GROW
          </p>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Build Your Skills
            <br />
            for a Brighter Future
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            We provide simple and practical learning resources to help you grow
            and achieve your goals.
          </p>

          <div className="flex gap-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors">
              Get Started
            </button>
            <button className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image placeholder */}
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
            alt="Students learning together"
            className="w-[450px] h-[320px] object-cover rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
