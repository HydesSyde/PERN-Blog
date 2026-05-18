import Homepage from "./pages/home.page";
import UserAuthForm from "./pages/userAuthForm.page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in" element={<UserAuthForm type="sign-in" />} />
      <Route path="/sign-up" element={<UserAuthForm type="sign-up" />} />
    </Routes>
  );
};

export default App;
