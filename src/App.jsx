import Navbar from "./components/navbar.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
};

export default App;
