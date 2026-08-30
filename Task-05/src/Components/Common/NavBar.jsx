import { TextAlignJustify, Wrench, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home");
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Prices", path: "/prices" },
    { name: "Team", path: "/team" },
    { name: "Task 4", path: "/task-4" },
  ];

  return (
    <div className="bg-[#042c71] py-3 text-white">
      <nav className="max-w-[1200px]  lg:px-0 px-5 mx-auto ">
        <div className="items-center gap-5 flex flex-wrap justify-between">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-xl bg-[#FFAA19] p-3">
              <Wrench className="size-5 text-black" />
            </div>
            <h1 className="text-2xl font-medium">
              Ce<span className="text-[#FFAA19]">pair</span>
            </h1>
          </div>
          <div className="md:flex gap-x-7 hidden justify-center items-center">
            {menuItems.map((item) => (
              // console.log(item),
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase cursor-pointer ${isActive ? "text-[#FFAA19]" : "text-white"} hover:text-[#FFAA19]`
                }
              >
                {item.name}
              </NavLink>
            ))}
            {/* {menuItems.map((item, index) => (
              <p
                onClick={() => setActiveItem(item)}
                className={`text-sm font-semibold uppercase  ${activeItem === item ? "text-[#FFAA19]" : "text-white"} hover:text-[#FFAA19]`}
              >
                {item}
              </p>
            ))} */}
            <div className="bg-[#FFAA19] text-base py-2 text-black font-medium hover:bg-amber-50 px-5 rounded-lg">
              <button>Get a Quote</button>
            </div>
          </div>
          <div className="md:hidden" onClick={() => setShow(!show)}>
            {show ? <X /> : <TextAlignJustify />}
          </div>
        </div>

        {show && (
          <div className="flex flex-col gap-3 mt-10 md:hidden">
            {menuItems.map((item, index) => (
              <p className="text-sm font-semibold uppercase">{item}</p>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
