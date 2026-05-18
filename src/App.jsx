import Homepage from "./pages/home.page";
import UserAuthForm from "./pages/userAuthForm.page";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<UserAuthForm type="sign-in" />} />
        <Route path="/sign-up" element={<UserAuthForm type="sign-up" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
