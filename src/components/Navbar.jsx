import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const sections = [ 'about', 'skills', 'projects','Education','contact']

  return (
    <nav className="fixed top-4 left-1/2 border border-white  transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg z-50 px-6 py-3 w-auto">
      <div className="flex items-center justify-between w-full">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-[-35px] mt-3 bg-gray-900 rounded-lg shadow-lg px-6 py-4 flex flex-col space-y-4 md:hidden w-48">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
