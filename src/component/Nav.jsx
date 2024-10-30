import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTableList } from "react-icons/fa6";
import { MdGroups } from 'react-icons/md';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { PiNotePencil } from 'react-icons/pi'; 
import { CgNotes } from 'react-icons/cg';
import { GoDotFill } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const Nav = ({ title }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref to track the sidebar element

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false); // Close the sidebar
      }
    };

    // Close sidebar on escape key press
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    // Add event listeners for click outside and key press
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Cleanup listeners on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div> 
      <header>
        <nav>
          <div> 
            <div className='nav mt-6  flex justify-between border-b-2 border-b-orange-500'>
              <div className="">
                <div className='flex center text-xl'>
                  {/* Toggle Button for Sidebar */}
                  <button className='group' onClick={toggleSidebar}>
                    <FaBars className='text-gray-600 me-4 hidden max-lg:block w-6 h-6 mb-3' />
                  </button>

                  {/* Sidebar */}
                  {isSidebarOpen && (
                    <div
                      className="sidebar z-10 absolute w-[216px] px-4 py-2 mt-0"
                      ref={sidebarRef} // Attach ref to the sidebar
                    >
                      <div className='mt-[47px] mb-[42px] w-41 h-14'>
                        <img src="/LAC_Logo_Alt 2.png" alt="Leadway assurance" />
                      </div>
                      <div>
                        <span className='px-3 mt-10 mb-8 font-bold flex items-start text-zinc-500'>TRM</span>
                      </div>
                      <div>
                        <ul className='mt-3 text-white flex flex-col items-start'>
                          <li className='mb text-xs gap-5 hover:text-orange-500 py-2'>
                            <NavLink to="/overview" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                              <BiBarChartAlt2 className='inline-block w-4 h-5 mr-3 -mt-1' />
                              Overview
                            </NavLink>
                          </li>
                          <li className='mb text-xs gap-5 hover:text-orange-500 py-2'>
                            <NavLink to="/inspections" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                              <FaTableList className='inline-block w-4 h-5 mr-3 -mt-1' />
                              Inspections
                            </NavLink>
                          </li>
                          <li className='mb text-xs hover:text-orange-500 py-2'>
                            <NavLink to="/personnel" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                              <MdGroups className='inline-block w-4 h-5 mr-3 -mt-1' />
                              Personnel
                            </NavLink>
                          </li>
                          <li className='mb text-xs gap-5 hover:text-orange-500 py-2'>
                            <NavLink to="/workshop" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                              <PiNotePencil className='inline-block w-4 h-5 mr-3 -mt-1' />
                              Workshop
                            </NavLink>
                          </li>
                          <li className='mb text-xs gap-5 hover:text-orange-500 py-2'>
                            <NavLink to="/report" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                              <CgNotes className='inline-block w-4 h-5 mr-3 -mt-1' />
                              Report
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className='mt-16 flex flex-col items-start'>
                        <span className='px-3 text-zinc-500'>BUSINESSES</span>
                        <ul className='mb-3 mt-4 text-xs gap-5 px-3 flex flex-col items-start'>
                          <li className='mb text-sm'>
                            <GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700' />
                            <span className='text-white'>Marine</span>
                          </li>
                          <li className='mb text-sm'>
                            <GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-orange-700' />
                            <span className='text-white'>Motor</span>
                          </li>
                          <li className='mb text-sm'>
                            <GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-blue-700' />
                            <span className='text-white'>Property</span>
                          </li>
                          <li className='mb text-sm'>
                            <GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-green-700' />
                            <span className='text-white'>Agric</span>
                          </li>
                          <li className='mb text-sm'>
                            <GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-red-700' />
                            <span className='text-white'>Engineering</span>
                          </li>
                          <li className='mb text-sm'>
                            <GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-yellow-700' />
                            <span className='text-white'>Bond</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  <span className='text-blue-950 font-semibold mb-3'>{title}</span>
                </div>
              </div>
              <div className='flex items-center gap-x-5'>
                <div className='mb-3 px-2 py-1 border rounded-full bg-black relative'>
                  <button className='group'>
                    <p className='text-lg text-orange-600'>KO</p>
                    <div className='z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-black'>
                      <ul className='py-2 text-sm text-orange-500'>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Settings</a></li>
                        <li><a href="">Sign out</a></li>
                      </ul>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
