import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo2.png";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <div className="bg-[#1f2028] fixed w-full z-50">
      <nav className="pl-4 flex items-center justify-between text-white py-4 max-w-[1440px] mx-auto md:px-12">
        <div className="flex basis-1/2 gap-10">
          <div className="">
            <img
              className="rounded-full z-50 ring ring-offset-[.5px] ring-white w-[40px] h-[40px]"
              src={Logo}
              alt="nav__logo"
            />
          </div>
          <div className="hidden text-gray-400 md:flex items-center space-x-1">
            <MdPhoneIphone size={24} color="white" />
            <p>+2349132717758</p>
          </div>
          <div className="hidden text-gray-400 md:flex items-center space-x-1">
            <HiOutlineMail size={24} color="white" />
            <p>ayesorofemi@gmail.com</p>
          </div>
        </div>
        {/* <div className="hidden md:flex">
          <Link className="mr-6" to="/">
            About
          </Link>
          <Link className="mr-6" to="/">
            Project
          </Link>
          <Link className="mr-6" to="/">
            Contact
          </Link>
        </div> */}
      </nav>
    </div>
  );
}

export default Nav;
