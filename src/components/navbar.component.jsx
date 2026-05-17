import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import glass from "../icons/glass.png";

const Navbar = () => {
  return (
    <section className="navbar flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="blog-logo" className="w-10 h-10" />
      </Link>
      <div className="flex items-center text-sm">
        <span>
          <img src={glass} alt="search-icon" className="w-10 h-10 m-3" />
        </span>
        <Link to={"/sign-in"}>
          <button className="btn-dark">Sign-in</button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
