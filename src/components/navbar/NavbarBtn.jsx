import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="md:px-4 px-2 py-1 md:py-2 rounded-full md:text-xl text-base font-bold font-body text-white border-orange border flex items-center gap-1  hover:bg-darkOrange hover:border-white">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
