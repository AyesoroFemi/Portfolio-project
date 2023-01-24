import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Nav({ mode, dark }) {
  return (
    <div className="bg-[#1f2028] fixed w-full z-50 dark:bg-gray-100 dark:text-black">
      <nav className="pl-4 flex items-center justify-between text-white py-4 max-w-[1440px] mx-auto md:px-12">
        <div className="flex basis-1/2 gap-10">
          <Link to="/" className="">
            <img
              className="rounded-full z-50 ring ring-offset-[.5px] ring-white dark:ring-gray-400 w-[40px] h-[40px]"
              src={Logo}
              alt="nav__logo"
            />
          </Link>
          <div className="hidden text-gray-400 md:flex items-center space-x-1">
            <MdPhoneIphone size={24} className="dark:text-black" />
            <p className="dark:text-black">+2349132717758</p>
          </div>
          <div className="hidden text-gray-400 md:flex items-center space-x-1">
            <HiOutlineMail size={24} className="dark:text-black" />
            <p className="dark:text-black">ayesorofemi@gmail.com</p>
          </div>
        </div>
        <div className="hidden md:flex">
          <div onClick={() => mode(!dark)} className="mr-6 cursor-pointer">
            <BsFillMoonStarsFill size={24} className="dark:text-black" />
          </div>
          <Link className="mr-6" to="/">
            Project
          </Link>
          <Link className="mr-6" to="/">
            Contact
          </Link>
        </div>
        <div
          onClick={() => mode(!dark)}
          className="block md:hidden  mr-6 cursor-pointer"
        >
          <BsFillMoonStarsFill size={24} className="dark:text-black" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
