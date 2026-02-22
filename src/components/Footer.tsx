import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            English<span className="text-blue-500">Master</span>
          </h2>
          <p className="text-sm mt-2 text-gray-500">
            Learn. Practice. Improve.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm">
          <Link to="/" className="hover:text-white transition duration-300">
            Home
          </Link>
          {/* <Link to="/course" className="hover:text-white transition duration-300">
            Course
          </Link> */}
          <Link to="/grammar" className="hover:text-white transition duration-300">
            Grammar
          </Link>
          <Link to="/quiz" className="hover:text-white transition duration-300">
            Quiz
          </Link>
        </div>



      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} EnglishMaster. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;