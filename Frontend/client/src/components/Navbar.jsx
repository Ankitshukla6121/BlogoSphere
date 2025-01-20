import React, { useContext, useState } from 'react';
import Menu from './Menu';
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [prompt, setPrompt] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { user } = useContext(UserContext);

  const handleSearch = () => {
    navigate(prompt ? `/?search=${prompt}` : '/');
  };

  return (
    <div className="text-white bg-black">
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        {/* Logo */}
        <h1 className="text-lg font-extrabold md:text-xl">
          <Link to="/" className="hover:text-gray-400">Blogosphere</Link>
        </h1>

        {/* Search Bar */}
        {path === '/' && (
          <div className="flex items-center">
            <input
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              className="px-4 py-2 text-black bg-white rounded-l-lg outline-none"
              placeholder="Search a post"
              type="text"
              aria-label="Search posts"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 text-black bg-white rounded-r-lg hover:bg-gray-200"
              aria-label="Search"
            >
              <BsSearch />
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <div className="items-center hidden space-x-6 md:flex">
          {user ? (
            <>
              <Link to="/write" className="hover:text-gray-400">Write</Link>
              <div onClick={toggleMenu} className="relative cursor-pointer">
                <FaBars />
                {menuOpen && <Menu />}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">Login</Link>
              <Link to="/register" className="hover:text-gray-400">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            <FaBars />
          </div>
          {menuOpen && <Menu />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
