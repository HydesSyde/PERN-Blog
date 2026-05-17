import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import glass from "../icons/glass.png";
import content from "../icons/content.png";
import { useContext } from "react";

const Navbar = () => {
  //check for user sign in from use auth, then assign it to user
  //add userAuth as argument in useContext when done
  //const userAuth = useContext(true);
  //change true to useAuth after setting
  const user = true;

  return (
    <section className="navbar">
      <div className="flex w-1/2 items-center justify-between md:justify-start">
        <Link to="/">
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
              <button className="btn-light hidden md:flex">Sign-in</button>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
