import { TextAlignJustify, Wrench, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const menuItems = ["Home", "About", "Services", "Prices", "Team", "Contact"];

  return (
    <div className="bg-[#042c71] py-3 text-white">
      <nav className="max-w-[1100px]  lg:px-0 px-5 mx-auto ">
        <div className="items-center gap-5 flex flex-wrap justify-between">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-xl bg-[#FFAA19] p-3">
                <Wrench className="size-5 text-black" />
            </div>
            <h1 className="text-2xl font-medium">Ce<span className="text-[#FFAA19]">pair</span></h1>
          </div>
          <div className="md:flex gap-x-7 hidden">
            {menuItems.map((item, index) => (
              <p className="text-sm font-semibold uppercase">{item}</p>
            ))}
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
