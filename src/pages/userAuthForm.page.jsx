import Navbar from "../components/navbar.component";
import { Link, Outlet } from "react-router-dom";
import email from "../icons/email.png";
import hide from "../icons/hide.png";
import key from "../icons/key.png";
import people from "../icons/people.png";
import { useState } from "react";

const UserAuthForm = ({ type }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [active, setActive] = useState(true);

  const triggerActive = () => {
    setActive(!active);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="h-cover font-gelasio flex flex-col items-center justify-center bg-white">
        <Outlet />
        {type === "sign-in" ? (
          <section className="h-cover flex flex-col items-center justify-center">
            <h1 className="text-3xl">Welcome Back</h1>
            <form onSubmit={handleSubmit}>
              <img src={email} className="w-5 h-5 relative left-3 top-9" />
              <input
                className="input-box placeholder:text-dark-grey mb-4"
                type="email"
                value={formData.email}
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
              <img src={key} className="w-5 h-5 relative left-3 top-9 z-10" />
              <div className="absolute flex fle-row">
                <input
                  className="input-box placeholder:text-dark-grey mb-4"
                  type={active ? "password" : "text"}
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />

                <img
                  src={hide}
                  onClick={triggerActive}
                  className="w-5 h-5 relative right-8 top-4 z-100 hover:cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="relative btn-dark text-sm flex w-[1] mx-auto top-20"
              >
                Sign In
              </button>
            </form>
          </section>
        ) : (
          <section className="h-cover flex flex-col items-center justify-center">
            <h1 className="text-3xl">Join Us Today</h1>
            <form onSubmit={handleSubmit}>
              <img src={people} className="w-5 h-5 relative left-3 top-9" />
              <input
                className="input-box placeholder:text-dark-grey mb-4"
                type="text"
                value={formData.fullname}
                name="fullname"
                placeholder="Enter your full name"
                onChange={handleChange}
              />
              <img src={email} className="w-5 h-5 relative left-3 top-9" />
              <input
                className="input-box placeholder:text-dark-grey mb-4"
                type="email"
                value={formData.email}
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
              <img src={key} className="w-5 h-5 relative left-3 top-9 z-10" />
              <div className="absolute flex fle-row">
                <input
                  className="input-box placeholder:text-dark-grey mb-4"
                  type={active ? "password" : "text"}
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                <img
                  src={hide}
                  onClick={triggerActive}
                  className="w-5 h-5 relative right-8 top-4 z-100 hover:cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="relative btn-dark text-sm flex w-[1] mx-auto top-20"
              >
                Sign Up
              </button>
            </form>
          </section>
        )}

        <div className="flex items-center justify-center">
          <span className="border border-grey h-0 w-[100px]"></span>
          <h1 className="m-3 text-grey">OR </h1>
          <span className="border border-grey h-0 w-[100px]"></span>
        </div>

        {type === "sign-in" ? (
          <p className="text-dark-grey text-xl text-center mt-6">
            Don't have an account?
            <Link
              to="/sign-up"
              className="underline text-black text-xl md:text-lg ml-1"
            >
              Join Us Today
            </Link>
          </p>
        ) : (
          <p className="text-dark-grey text-xl text-center mt-6">
            Already a member?
            <Link
              to="/sign-in"
              className="underline text-black text-xl md:text-lg ml-1"
            >
              Sign in here
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default UserAuthForm;
