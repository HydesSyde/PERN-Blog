import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import email from "../icons/email.png";
import hide from "../icons/hide.png";
import key from "../icons/key.png";
import people from "../icons/people.png";
import Navbar from "../components/navbar.component";
import Toast from "../components/toast";
import { UserContext } from "../context/useContext";
import { storeInSession } from "../common/session";

const UserAuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [toast, setToast] = useState(null);
  const [toastType, setToastType] = useState(false);
  const [active, setActive] = useState(true);

  //storing user auth
  const { setUserAuth } = useContext(UserContext);
  const triggerActive = () => {
    setActive((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //error check for data form
    if (!formData.email || !formData.password) {
      setToast("Please fill all field");
      setToastType(false);
      console.log(toast, toastType, "Toast rendering");
      return;
    }

    //inputting api route
    const API_BASE = import.meta.env.VITE_API_URL;

    if (!API_BASE) {
      throw new Error("API BASE does not exist");
    }

    const endpoint = type === "sign-in" ? "/sign-in" : "/sign-up";

    try {
      //getting response
      const response = await axios.post(`${API_BASE}${endpoint}`, formData, {
        timeout: 5000,
      });

      console.log(response.data);
      const userData = response.data;

      storeInSession("user", userData);
      setUserAuth(userData);

      setToast(
        type === "sign-in"
          ? "Log in successful"
          : "Account Created succesfully",
      );
      //if login is successfull, nofitication should be successful
      setToastType(true);

      setTimeout(() => {
        navigate("/editor");
      }, 1500);
    } catch (error) {
      console.log(error);
      setToast("User Auth failed");
      setToastType(false);
      console.log(toast, toastType);
    }
  };

  return (
    <>
      {/* Notification message with toast */}
      {toast && (
        <Toast
          message={toast}
          type={toastType}
          onClose={() => setToast(null)}
        />
      )}
      <Navbar />
      <div className="min-h-screen font-gelasio flex flex-col items-center justify-center bg-white">
        <Outlet />
        {type === "sign-in" ? (
          <section className="min-h-screen flex flex-col items-center justify-center">
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
              <div className="absolute flex flex-row">
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
          <section className="min-h-screen flex flex-col items-center justify-center">
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
                placeholder="example"
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
