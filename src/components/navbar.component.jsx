import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import logo from "../imgs/logo.png";
import glass from "../icons/glass.png";
import content from "../icons/content.png";

const Navbar = () => {
  //check for user sign in from use auth, then assign it to user
  //add userAuth as argument in useContext when done
  //const userAuth = useContext(true);
  //change true to useAuth after setting
  const user = true;

  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="navbar"
    >
      <div className="flex w-1/2 items-center justify-between md:justify-start">
        <Link to="">
          <img src={logo} alt="blog-logo" className="w-10 h-10 md:mr-10" />
        </Link>

        <span>
          <img
            src={glass}
            alt="search-icon"
            className="w-10 h-10 ml-3 relative left-auto right-[-60px]"
          />
        </span>
      </div>
      <div className="text-sm w-1/2">
        <ul className="flex items-center justify-end">
          <li className="mr-5">
            <Link to={user ? "/editor" : "sign-in"}>
              <img src={content} alt="" className="hidden md:flex h-10 w-10" />
            </Link>
          </li>
          <li className="mr-5">
            <Link to={"/sign-in"}>
              <button className="btn-dark">Sign-in</button>
            </Link>
          </li>
          <li className="">
            <Link to={"/sign-up"}>
              <button className="btn-light hidden md:flex">Sign-up</button>
            </Link>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Navbar;
