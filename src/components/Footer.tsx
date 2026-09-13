const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-[50px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">

              <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-r from-purple-500 to-pink-500">
                <span className="text-[8px] font-bold text-white">
                  DS
                </span>
              </div>
              <h2 className="text-sm font-bold">
                Dev <span className="text-pink-600">Stack</span>
              </h2>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex gap-4 text-xs">
              <a href="#" className="text-gray-700 hover:text-pink-600">
                GitHub
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-600"
              >
                LinkedIn
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">

              <a
                href="#home"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Technologies
              </a>
              <a
                href="#projects"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Projects
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-900">
              Company
            </h3>
            <div className="mt-4 space-y-3">

              <a
                href="#about"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Careers
              </a>

            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-900">
              Legal
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href="#privacy"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="block text-xs text-gray-400 hover:text-pink-600"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100" />
        <div className="flex flex-col gap-4 py-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="hover:text-pink-600"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="hover:text-pink-600"
            >
              Terms
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;