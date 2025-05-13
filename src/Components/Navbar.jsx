import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const navigationForMobile = (paths) => {
    navigate(paths);
    setShowMenu(false);
  };

  const array_of_Tags = [
    {
      tag: "Home",
      path: "/",
    },
    {
      tag: "Experience",
      path: "/Experience",
    },
    {
      tag: "Projects",
      path: "/Projects",
    },
    {
      tag: "Contact Me",
      path: "/ContactMe",
    },
  ];

  return (
    <div className="fixed top-6 left-0 z-50 w-full px-6 ">
      <nav className="max-w-7xl mx-auto px-6 rounded-2xl p-4 bg-black shadow-lg shadow-cyan-500/50  ">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-center text-2xl text-white cursor-pointer md:text-3xl lg:text-4xl font-serif">
            <Link to={"/"}>
              <span> &lt;</span>
              Sarvajeet
              <span>/&gt;</span>
            </Link>
          </h1>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {showMenu === true ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdClose className="text-4xl" />
                </motion.div>
              ) : (
                <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <IoMdMenu className="text-4xl" />
              </motion.div>
              )}
            </AnimatePresence>
          </button>

          <div className="lg:flex hidden items-center justify-center gap-3 font-sans  text-white font-semibold">
            {array_of_Tags.map((data, index) => (
              <div key={index}>
                <NavLink
                  to={data?.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition-all duration-75 cursor-pointer text-xl font-serif font-bold ${
                      isActive
                        ? "text-white bg-blue-500"
                        : "hover:text-white hover:bg-blue-400"
                    }`
                  }
                >
                  {data?.tag}
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {showMenu && (
          <div className="bg-black h-screen rounded-2xl lg:hidden mt-[70px] ">
            <nav>
              <ul className="grid grid-cols-1 place-items-center text-white gap-6 text-4xl font-mono">
                {array_of_Tags.map((ele, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => navigationForMobile(ele.path)}
                    >
                      {ele.tag}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </div>
  );
};
