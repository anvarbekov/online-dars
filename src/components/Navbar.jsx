import { Link } from "react-router-dom";

// context
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const colors = useContext(GlobalContext);

// navbarning boshlang'ich rangi va uni o'zgartiradigan setNavbarColor
  const [navbarColor, setNavbarColor] = useState('#222831')

  // ranglarni dinamik berish uchun funksiya
  const handleColor = (color) => {
    setNavbarColor(color)
  }

  return (
    <header className="py-5 text-white" style={{backgroundColor: navbarColor}}>
      <div className="main-container px-4">
        <nav className="flex items-center justify-between">
          <Link to={"/"}>Logo</Link>
          <ul className="md:flex hidden items-center gap-x-4">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <div className="flex items-center gap-x-2">
                {colors.map((color, i) => (
                  console.log(color),
                  <div
                    key={i}
                    className="w-5 h-5 border rounded-full cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColor(color)}
                    ></div>
                ))}
                {/* <div className="w-5 h-5 rounded-full bg-red-600 cursor-pointer"></div>
                <div className="w-5 h-5 rounded-full bg-teal-600 cursor-pointer"></div>
                <div className="w-5 h-5 rounded-full bg-orange-600 cursor-pointer"></div> */}
              </div>
            </li>
          </ul>
          <div className="md:hidden">Show</div>
        </nav>
      </div>
    </header>
  );
}
