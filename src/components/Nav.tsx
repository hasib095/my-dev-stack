const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">DS</span>
          </div>

          <h1 className="text-lg font-bold">
            Dev<span className="text-pink-600">Stack</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-7">
          <a href="#home" className="text-pink-600 text-sm font-medium"> Home </a>

          <a
            href="#technologies"
            className="text-gray-600 text-sm hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-gray-600 text-sm hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-gray-600 text-sm hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-600 text-sm hover:text-pink-600"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-700 text-sm hover:text-pink-600">
            Sign In
          </button>
          <button className="bg-pink-600 text-white text-sm px-5 py-2 rounded-full hover:bg-pink-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
